"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Spinner from "@/components/Spinner/Spinner";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <Spinner />;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });

    setLoading(false);

    router.push("/dashboard");
  };
  return (
    <div className={styles.container}>
      {loading && <Spinner />}
      <h2>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Login</button>
      </form>
      {err && <p style={{ color: "red" }}>Something went wrong</p>}
      <Link href="/dashboard/register">Register</Link>
      <ToastContainer />
    </div>
  );
};

export default Login;

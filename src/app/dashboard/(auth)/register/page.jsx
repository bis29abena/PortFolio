"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Spinner from "@/components/Spinner/Spinner";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, isloading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    isloading(true);

    const fName = e.target[0].value;
    const lName = e.target[1].value;
    const mName = e.target[2].value;
    const email = e.target[3].value;
    const password = e.target[4].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fName,
          lName,
          mName,
          email,
          password,
        }),
      });

      isloading(false);

      const message = await res.text();
      if (res.status == 201) {
        toast.success("Account Registered successfully ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push("/dashboard/login?success=Account Created Successfully");
      } else {
        toast.error(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setErr(true);
      }
    } catch (error) {
      isloading(false);
      setErr(true);
    }
  };
  return (
    <div className={styles.container}>
      {loading && <Spinner />}
      <h2>Register</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.FormP}>
          <input
            type="text"
            placeholder="First Name"
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Middle Name"
            className={styles.input}
          />
        </div>

        <div className={styles.FormP}>
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
          <button className={styles.button}>Register</button>
        </div>
      </form>
      {err && <p style={{ color: "red" }}>Something went wrong!!</p>}
      <Link href="/dashboard/login">Login with an existing account</Link>
      <ToastContainer />
    </div>
  );
};

export default Register;

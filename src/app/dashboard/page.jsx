"use client";
import Spinner from "@/components/Spinner/Spinner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import useSWR from "swr";

import React, { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);

  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `/api/posts?email=${session.data?.user?.email}`,
    fetcher
  );

  if (session.status === "loading") {
    return <Spinner />;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          email: session.data?.user?.email,
        }),
      });
      setLoading(false);
      const message = res.statusText ?? await res.text();
      console.log(res);
      if (res.status === 201) {
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
      }
    } catch (error) {
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
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        {loading && <Spinner />}
        <div className={styles.posts}>
          {isLoading ? (
            <Spinner />
          ) : (
            data?.map((post) => (
              <div className={styles.post} key={post._id}>
                <div className={styles.imageContainer}>
                  <Image src={post.image} alt="" width={200} height={200} />
                </div>
                <h1 className={styles.title}>{post.title}</h1>
                <span className={styles.deleteButton}>X</span>
              </div>
            ))
          )}
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" className={styles.input} placeholder="Title" />
          <input
            type="text"
            className={styles.input}
            placeholder="Description"
          />
          <input type="text" className={styles.input} placeholder="Image" />
          <textarea
            placeholder="Content"
            style={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.postSubmit}>Submit</button>
        </form>
        <ToastContainer />
      </div>
    );
  }
};

export default Dashboard;

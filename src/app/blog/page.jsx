import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async() => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch Data!!");
  }

  return res.json();
}

export const metadata = {
  title: "Posts",
  description: "This is the about page for the portfolio for Osei Bismark 'Bis29'"
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Link
          className={styles.item}
          href={`/blog/${item._id}`}
          key={item._id}
        >
          <div className={styles.imgContainer}>
            <Image
              src={item.image}
              fill={true}
              className={styles.img}
              alt="img"
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;

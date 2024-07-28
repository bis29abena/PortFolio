import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import Avatar from "public/avatar.svg";

const getPost = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

export async function generateMetadata({ params }) {
  const data = await getPost(params.post);

  return {
    title: `Post on ${data.title}`,
    description: `${data.desc}`,
  };
}

const Blogpost = async ({ params }) => {
  const post = await getPost(params.post);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.authorInfo}>
          <h1 className={styles.title}>{post.title}.</h1>
          <p className={styles.desc}>{post.desc}</p>
          <div className={styles.infoDets}>
            <Image
              src={post?.userImage || Avatar}
              alt="info"
              width={30}
              height={30}
              className={styles.infoImg}
            />
            <p className={styles.authName}>John Doe</p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={post.image}
            alt="img"
            fill={true}
            className={styles.img}
          />
        </div>
      </div>

      <div className={styles.bottom}>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default Blogpost;

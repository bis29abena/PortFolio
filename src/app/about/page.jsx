import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "About Bis29",
  description: "This is the about page for the portfolio for Osei Bismark 'Bis29'"
}

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/about.jpg"
          fill={true}
          alt="about"
          className={styles.img}
        />
        <div className={styles.textOnImage}>
          <h1 className={styles.imgTitle}>Digital Story Tellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winnig digital experience
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum id
            dolor sunt neque deleniti dignissimos sed praesentium laboriosam
            nostrum odio nihil corporis aspernatur numquam, saepe, in natus
            repellat ad officia.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            pariatur qui quasi omnis impedit illum labore doloremque, cum ad
            deserunt, iste aut explicabo consequuntur quam quis minima id eaque
            consectetur?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum id
            dolor sunt neque deleniti dignissimos sed praesentium laboriosam
            nostrum odio nihil corporis aspernatur numquam, saepe, in natus
            repellat ad officia.
            <br />
            <br />
            - Dynamic Sites <br />
            <br />- Machine Learning Models
            <br />
            <br />- Illustrative Design
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;

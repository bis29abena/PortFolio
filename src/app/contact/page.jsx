import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Contact",
  description: "This is the Contact page for the portfolio for Osei Bismark 'Bis29'"
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="/contact.png"
            fill={true}
            alt="contact"
            className={styles.img}
          />
        </div>
        <form className={styles.formContainer}>
          <input
            type="text"
            name="fullName"
            placeholder="Name"
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
          />
          <textarea
            name="message"
            className={styles.textarea}
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;

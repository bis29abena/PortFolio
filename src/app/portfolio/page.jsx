import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Portfolio",
  description: "This is the portfolio page for Bis29"
}
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectedTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustration" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/Websites" className={styles.item}>
          
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/Machine_Learning" className={styles.item}>
          <span className={styles.title}>ML</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;

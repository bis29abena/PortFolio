import React from "react";
import styles from "./footer.module.css"
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2023 Bis29. All rights reserved</div>
      <div className={styles.icons}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Facebook"/>
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Instagram"/>
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Twitter"/>
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Youtube"/>
      </div>
    </div>
  );
};

export default Footer;

import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Your Design For Your Digital Products</h1>
        <p className={styles.desc}>
          Turning Your Idea into Reality, We bring the teams from the global
          tech industry.
        </p>
        <Button url="/portfolio" text="See My Works"/>
      </div>
      <div className={styles.item}>
        <Image src="/hero.png" width={500} height={500} alt="Bismark" className={styles.img}/>
      </div>
    </div>
  );
}

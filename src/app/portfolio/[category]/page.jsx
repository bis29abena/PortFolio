import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import splitString from "@/utils/splitString"

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{splitString(params.category)}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            alias nisi cupiditate perferendis assumenda nesciunt suscipit soluta
            id iste! Vel, aliquam alias cumque temporibus at repellat. Atque
            architecto nemo exercitationem?
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            alt="img"
            src="https://images.pexels.com/photos/17120429/pexels-photo-17120429/free-photo-of-symmetry-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            alias nisi cupiditate perferendis assumenda nesciunt suscipit soluta
            id iste! Vel, aliquam alias cumque temporibus at repellat. Atque
            architecto nemo exercitationem?
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            alt="img"
            src="https://images.pexels.com/photos/17120429/pexels-photo-17120429/free-photo-of-symmetry-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            alias nisi cupiditate perferendis assumenda nesciunt suscipit soluta
            id iste! Vel, aliquam alias cumque temporibus at repellat. Atque
            architecto nemo exercitationem?
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            alt="img"
            src="https://images.pexels.com/photos/17120429/pexels-photo-17120429/free-photo-of-symmetry-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;

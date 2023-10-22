import Buttom from "@/components/CardCourse/Buttom";
import styles from "@/styles/components/RigthSideBar/GoPremiun/gopremiun.module.css";
import { brain } from "@/utils/images";

import Image from "next/image";

export default function GoPremiun() {
  return (
    <section className={styles.content}>
      <section className={styles.column_text}>
        <span className={styles.title}>Lern even more!</span>
        <span className={styles.subtitle}>Unlock premium features </span>
        <span className={styles.subtitle}>only for $9.99 per month.</span>
        <div className={styles.buttom}>
          <Buttom text={"Go Premiun"} />
        </div>
      </section>
      <section className={styles.box_image}>
        <Image src={brain} alt="Brain Image" />
      </section>
    </section>
  );
}

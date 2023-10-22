import MidContain from "@/components/MidContain/MidContain";
import RigthSideBar from "@/components/RigthSideBar/RigthSideBar";
import styles from "@/styles/Main/layout.module.css";

export default function Home() {
  return (
    <section className={styles.page_content}>
      <section className={styles.main_column_1}>
        <MidContain />
      </section>
      <section className={styles.main_column_2}>
        <RigthSideBar />
      </section>
    </section>
  );
}

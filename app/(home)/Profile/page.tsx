import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import styles from "@/styles/components/LeftSideBar/sidebar.module.css";

export default function Profile() {
  return (
    <section className={styles.main}>
      <section className={styles.main_column_1}>
        <LeftSideBar />
      </section>
    </section>
  );
}

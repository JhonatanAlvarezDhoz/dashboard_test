import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import Menu from "@/components/Menu/Menu";
import styles from "@/styles/components/LeftSideBar/sidebar.module.css";

export default function Courses() {
  return (
    <section className={styles.main}>
      <div className={styles.content_side_bar}>
        <h1 className={styles.h1}>Courses</h1>
      </div>
    </section>
  );
}

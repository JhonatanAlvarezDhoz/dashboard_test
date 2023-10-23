import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import Menu from "@/components/Menu/Menu";
import styles from "@/styles/components/LeftSideBar/sidebar.module.css";

export default function Courses() {
  return (
    <section className={styles.main}>
      <Menu />
    </section>
  );
}

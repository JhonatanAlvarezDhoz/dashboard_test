import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import { ReactNode } from "react";
import styles from "@/styles/Main/layout.module.css";
import Menu from "@/components/Menu/Menu";

interface Props {
  children: ReactNode;
}
export default function HomeLayout({ children }: Props) {
  return (
    <section>
      <section className={styles.menu}>
        <Menu children={children} />
      </section>
      <section className={styles.sidebar}>
        <LeftSideBar
          children={
            <section className={styles.page_content}>{children}</section>
          }
        />
      </section>
    </section>
  );
}

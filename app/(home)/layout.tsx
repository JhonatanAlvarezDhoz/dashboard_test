import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import { ReactNode } from "react";
import styles from "@/styles/Main/layout.module.css";

interface Props {
  children: ReactNode;
}
export default function HomeLayout({ children }: Props) {
  return (
    <section>
      <section>
        <LeftSideBar
          children={
            <section className={styles.page_content}>{children}</section>
          }
        />
      </section>
    </section>
  );
}

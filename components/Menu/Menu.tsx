"use client";
import styles from "@/styles/components/Menu/menu.module.css";
import Image from "next/image";
import { logo, menu } from "@/utils/icons";
import { routes } from "@/utils/constant";
import Link from "next/link";
import { useStateMenu } from "@/stores/Menu/Menu";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Menu({ children }: Props) {
  const [currentState, setCurrentState] = useStateMenu((state) => [
    state.currentState,
    state.setCurrentState,
  ]);

  return (
    <section className={styles.main}>
      <header className={styles.menu_content}>
        <Image src={logo} alt="" />
        <button
          className={styles.menu_buttom}
          onClick={() => setCurrentState(true)}
        >
          <Image className={styles.icon} src={menu} alt="" />
        </button>

        <nav className={` ${currentState ? styles.isActive : styles.nav}`}>
          <ul className={styles.ul}>
            {routes.map(({ icon, route, alt }) => (
              <li className={styles.li} key={route}>
                <Link className={styles.link} href={route}>
                  <button
                    className={styles.buttom}
                    onClick={() => setCurrentState(true)}
                  >
                    <div>
                      <Image src={icon} alt={alt} />
                      <span>{alt}</span>
                    </div>
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {children}
    </section>
  );
}

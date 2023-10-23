import Image from "next/image";
import style from "@/styles/components/LeftSideBar/sidebar.module.css";
import layoutStyles from "@/styles/Main/layout.module.css";
import { logo, logout } from "@/utils/icons";
import Link from "next/link";
import { ReactNode } from "react";
import { routes } from "@/utils/constant";

interface Props {
  children: ReactNode;
}

export default function LeftSideBar({ children }: Props) {
  return (
    <section className={layoutStyles.main}>
      <aside className={style.side_bar}>
        <section className={style.logo_section}>
          <div className={style.content_logo}>
            <Image className={style.logo} src={logo} alt="Icon Logo" />
          </div>
        </section>
        <section className={style.icons_section}>
          <nav>
            <ul>
              {routes.map(({ icon, route, alt }) => (
                <li key={route}>
                  <Link href={route}>
                    <div className={style.content_icon}>
                      <Image className={style.icon} src={icon} alt={alt} />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section className={style.logout_section}>
          <div className={style.content_icon}>
            <Image className={style.icon} src={logout} alt="Icon Logo" />
          </div>
        </section>
      </aside>
      {children}
    </section>
  );
}

// import Image from "next/image";
// import style from "@/styles/components/LeftSideBar/sidebar.module.css";

// import {
//   logo,
//   home,
//   learning,
//   profile,
//   message,
//   settings,
//   logout,
// } from "@/utils/icons";

// export default function LeftSideBar() {
//   return (
//     <section className={style.content_side_bar}>
//       <aside className={style.side_bar}>
//         <section className={style.logo_section}>
//           <div className={style.content_logo}>
//             <Image className={style.logo} src={logo} alt="Icon Logo" />
//           </div>
//         </section>
//         <section className={style.icons_section}>
//           <div className={style.content_icon}>
//             <Image className={style.icon} src={home} alt="Icon Home" />
//           </div>
//           <div className={style.content_icon}>
//             <Image className={style.icon} src={learning} alt="Icon Learning" />
//           </div>
//           <div className={style.content_icon}>
//             <Image className={style.icon} src={profile} alt="Icon Profile" />
//           </div>
//           <div className={style.content_icon}>
//             <Image className={style.icon} src={message} alt="Icon Message" />
//           </div>
//           <div className={style.content_icon}>
//             <Image className={style.icon} src={settings} alt="Icon Settings" />
//           </div>
//         </section>

//         <section className={style.logout_section}>
//           <div className={style.content_icon}>
//             <Image className={style.icon} src={logout} alt="Icon Logo" />
//           </div>
//         </section>
//       </aside>
//     </section>
//   );
// }

import Image from "next/image";
import style from "@/styles/components/LeftSideBar/sidebar.module.css";
import layoutStyles from "@/styles/Main/layout.module.css";
import {
  logo,
  home,
  learning,
  profile,
  message,
  settings,
  logout,
} from "@/utils/icons";
import Link from "next/link";
import { ReactNode } from "react";

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

const routes = [
  {
    icon: home,
    route: "/home",
    alt: "Icon Home",
  },
  {
    icon: learning,
    route: "/Courses",
    alt: "Icon Learning",
  },
  {
    icon: profile,
    route: "/Profile",
    alt: "Icon Profile",
  },
  {
    icon: message,
    route: "/Messages",
    alt: "Icon Message",
  },
  {
    icon: settings,
    route: "/Settings",
    alt: "Icon Settings",
  },
  //   {
  //     icon: logout,
  //     route: "/Logout",
  //     alt: "Icon Logo",
  //   },
];

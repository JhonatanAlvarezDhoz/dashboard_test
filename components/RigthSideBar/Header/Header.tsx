import style from "@/styles/components/RigthSideBar/Header/header.module.css";

import Image from "next/image";
import Search from "../Finder/Finder";
import { bell_notification, picture_profile, arrow_down } from "@/utils/icons";

export default function Header() {
  return (
    <section className={style.content}>
      <Search />
      <section className={style.content_n_p}>
        <Image src={bell_notification} alt="" />
        <Image src={picture_profile} alt="" />
      </section>
      <Image className={style.arrow_down} src={arrow_down} alt="" />
    </section>
  );
}

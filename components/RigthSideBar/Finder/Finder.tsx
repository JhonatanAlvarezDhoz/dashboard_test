import style from "@/styles/components/RigthSideBar/Finder/finder.module.css";

import Image from "next/image";
import { search } from "@/utils/icons";

export default function Search() {
  return (
    <section className={style.conten_search}>
      <Image className={style.search_icon} src={search} alt="" />
      <input type="text" id="search" name="search" className={style.finder} />
    </section>
  );
}

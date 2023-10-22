import Image from "next/image";

import style from "@/styles/components/Header/header.module.css";
import { people } from "@/utils/images";

export default function Header() {
  return (
    <section className={style.bgContainer}>
      <section className={style.columm_text}>
        <span className={style.title}>Hello Josh!</span>
        <span className={style.subtitle}>It’s good to see you again.</span>
      </section>
      <Image src={people} alt="People" className={style.image} />
    </section>
  );
}

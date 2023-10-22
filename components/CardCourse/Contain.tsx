import style from "@/styles/components/CardCourse/contain.module.css";
import Image from "next/image";

import { clock, flame } from "@/utils/icons";

interface Props {
  time: String;
  rated: number;
}

export default function Contain({ time, rated }: Props) {
  return (
    <section className={style.content}>
      <section className={style.box_content}>
        <Image className={style.icon} src={clock} alt="" />
        <span>{time}</span>
      </section>
      <section className={style.box_content}>
        <Image className={style.icon} src={flame} alt="" />
        <span>{rated}</span>
      </section>
    </section>
  );
}

import style from "@/styles/components/CardCourse/cardprogrescourse.module.css";

import BaseCardCourse from "../CardCourse/BaseCardCourse";
import { spain, arrow_left, arrow_rigth } from "@/utils/icons";
import CircularProgresIndicatior from "../CircularProgresIndicator/CircularProgresIndicator";
import Image from "next/image";

export default function CardProgresCourse() {
  return (
    <section className={style.content}>
      <BaseCardCourse
        title={"Spanish B2"}
        subtitle={"by Alejandro Velazquez"}
        icon={spain}
        alt="IconSpain"
        text_buttom={"Continue"}
      >
        {<CircularProgresIndicatior />}
      </BaseCardCourse>
      <section className={style.arrows_content}>
        <Arrows />
      </section>
    </section>
  );
}

function Arrows() {
  return (
    <section className={style.arrow}>
      <Image src={arrow_left} alt="" />
      <Image src={arrow_rigth} alt="" />
    </section>
  );
}

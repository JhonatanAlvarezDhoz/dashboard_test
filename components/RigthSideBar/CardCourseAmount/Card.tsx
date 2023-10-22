import style from "@/styles/components/RigthSideBar/CardCourseAmount/cardcourseamount.module.css";

interface Props {
  number: number;
  text1: String;
  text2: String;
}

export default function Card({ number, text1, text2 }: Props) {
  return (
    <section className={style.card}>
      <span className={style.number}>{number}</span>
      <section className={style.column_text}>
        <span className={style.text}>{text1} </span>
        <span className={style.text}>{text2}</span>
      </section>
    </section>
  );
}

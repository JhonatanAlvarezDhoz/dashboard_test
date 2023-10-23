import style from "@/styles/components/RigthSideBar/CardCourseAmount/cardcourseamount.module.css";
import Card from "./Card";

export default function CardCourseAmount() {
  return (
    <section className={style.content}>
      <div className={style.card}>
        <Card number={11} text1={"Courses"} text2={"completed"} />
      </div>
      <div className={style.card}>
        <Card number={4} text1={"Courses"} text2={"in progres"} />
      </div>
    </section>
  );
}

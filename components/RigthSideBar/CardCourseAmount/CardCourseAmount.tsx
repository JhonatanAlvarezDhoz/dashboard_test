import style from "@/styles/components/RigthSideBar/CardCourseAmount/cardcourseamount.module.css";
import Card from "./Card";

export default function CardCourseAmount() {
  return (
    <section className={style.content}>
      <Card number={11} text1={"Courses"} text2={"completed"} />
      <Card number={4} text1={"Courses"} text2={"in progres"} />
    </section>
  );
}

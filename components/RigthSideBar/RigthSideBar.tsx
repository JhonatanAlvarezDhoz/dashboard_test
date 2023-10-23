"Use client";
import Header from "@/components/RigthSideBar/Header/Header";
import CardCourseAmount from "./CardCourseAmount/CardCourseAmount";
import Statistic from "./Statistic/Statistic";
import GoPremiun from "./GoPremiun/GoPremiun";
import style from "@/styles/components/RigthSideBar/sidebar.module.css";

export default function RigthSideBar() {
  return (
    <section>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.content}>
        <CardCourseAmount />
        <Statistic />
      </div>
      <div className={style.premiun_box}>
        <GoPremiun />
      </div>
    </section>
  );
}

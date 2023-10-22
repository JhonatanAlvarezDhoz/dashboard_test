"Use client";
import Header from "@/components/RigthSideBar/Header/Header";
import CardCourseAmount from "./CardCourseAmount/CardCourseAmount";
import Statistic from "./Statistic/Statistic";
import GoPremiun from "./GoPremiun/GoPremiun";

export default function RigthSideBar() {
  return (
    <section>
      <Header />
      <CardCourseAmount />
      <Statistic />
      <GoPremiun />
    </section>
  );
}

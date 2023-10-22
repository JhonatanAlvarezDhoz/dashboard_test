import { StatisticView } from "@/utils/constant";
import { useChangeStatisticView } from "@/stores/RigthSideBar/Statistic";
import style from "@/styles///components/RigthSideBar/Statistic/statistic.module.css";

import Grafic from "./Grafic";

export default function CurrentView() {
  const [currentStaticticView] = useChangeStatisticView((state) => [
    state.currentStaticticView,
  ]);
  if (currentStaticticView === StatisticView.learningHours) {
    return (
      <section className={style.grafic_box}>
        <Grafic />
      </section>
    );
  }

  if (currentStaticticView === StatisticView.myCourses) {
    return (
      <section className={style.my_courses}>
        <span className={style.my_courses_text}>This is the My Courses</span>
      </section>
    );
  }

  return <span>Choose a correct option</span>;
}

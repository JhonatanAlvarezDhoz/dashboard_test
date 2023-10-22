import { tagCourses } from "@/utils/constant";
import { useChangeShowCourse } from "@/stores/ShowCourses/ShowCourses";
import style from "@/styles///components/RigthSideBar/Statistic/statistic.module.css";

export default function SelectedShowCourses() {
  const [updateShowCourse] = useChangeShowCourse((state) => [
    state.updateShowCourse,
  ]);

  return (
    <main>
      {tagCourses.map((item, index) => (
        <button
          className={style.buttom}
          key={index}
          onClick={() => updateShowCourse(item.type)}
        >
          {item.label}
        </button>
      ))}
    </main>
  );
}

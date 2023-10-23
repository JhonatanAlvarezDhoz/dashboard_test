import {
  ShowCourses,
  courses,
  listTopRated,
  listNewest,
  listPopular,
} from "@/utils/constant";
import { useChangeShowCourse } from "@/stores/ShowCourses/ShowCourses";
import style from "@/styles/components/MidContain/midcontain.module.css";
import BaseCardCourse from "../CardCourse/BaseCardCourse";
import Contain from "../CardCourse/Contain";

export default function CurrentCourse() {
  const [currentShowCourse] = useChangeShowCourse((state) => [
    state.currentShowCourse,
  ]);
  if (currentShowCourse === ShowCourses.allcourse) {
    return (
      <section className={style.list_courses}>
        {courses.map((item, index) => (
          <BaseCardCourse
            key={index}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            text_buttom={item.text_buttom}
            alt=""
          >
            {<Contain time={item.duration} rated={item.rated}></Contain>}{" "}
          </BaseCardCourse>
        ))}
      </section>
    );
  }

  if (currentShowCourse === ShowCourses.thenewest) {
    return (
      <section className={style.list_courses}>
        {listNewest.map((item, index) => (
          <BaseCardCourse
            key={index}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            text_buttom={item.text_buttom}
            alt=""
          >
            {<Contain time={item.duration} rated={item.rated}></Contain>}
          </BaseCardCourse>
        ))}
      </section>
    );
  }

  if (currentShowCourse === ShowCourses.toprated) {
    return (
      <section className={style.list_courses}>
        {listTopRated.map((item, index) => (
          <BaseCardCourse
            key={index}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            text_buttom={item.text_buttom}
            alt=""
          >
            {<Contain time={item.duration} rated={item.rated}></Contain>}
          </BaseCardCourse>
        ))}
      </section>
    );
  }

  if (currentShowCourse === ShowCourses.mostpopular) {
    return (
      <section className={style.list_courses}>
        {listPopular.map((item, index) => (
          <BaseCardCourse
            key={index}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            text_buttom={item.text_buttom}
            alt=""
          >
            {<Contain time={item.duration} rated={item.rated}></Contain>}
          </BaseCardCourse>
        ))}
      </section>
    );
  }

  return <span>Choose a correct option</span>;
}

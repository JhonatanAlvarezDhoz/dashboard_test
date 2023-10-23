"use client";
import style from "@/styles/components/MidContain/midcontain.module.css";

import Header from "../Header/Header";
import HeaderRigth from "../RigthSideBar/Header/Header";
import CardProgresCourse from "../CardCourse/CardProgresCourse";
import SelectedShowCourses from "./SelectedShowCourses";
import CurrentCourse from "./CurrentCourse";

export default function MidContain() {
  return (
    <section className={style.mid_contain}>
      <div className={style.header_rigth}>
        <HeaderRigth />
      </div>
      <Header />
      <section className={style.progres_course}>
        <CardProgresCourse />
      </section>
      <span className={style.text_course}>Courses</span>
      <section className={style.courses_content}>
        <SelectedShowCourses />
      </section>
      <section className={style.list_courses}>
        <CurrentCourse />
      </section>
    </section>
  );
}

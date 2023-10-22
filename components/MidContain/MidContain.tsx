import Link from "next/link";
import style from "@/styles/components/MidContain/midcontain.module.css";

import Header from "../Header/Header";
import CardProgresCourse from "../CardCourse/CardProgresCourse";

export default function MidContain() {
  return (
    <section className={style.mid_contain}>
      <Header />
      <section className={style.progres_course}>
        <CardProgresCourse />
      </section>
      <span className={style.text_course}>Courses</span>
      <section className={style.courses_content}>
        <nav className={style.option_list_courses}>
          <ul className={style.option_list_courses}>
            {coursesRout.map(({ label, route }) => (
              <li key={route}>
                <Link className={style.link} href={route}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section className={style.list_courses}>{}</section>
    </section>
  );
}

const coursesRout = [
  {
    label: "All Courses",
    route: "/AllCourse",
  },
  {
    label: "The Newest",
    route: "/TheNewest",
  },
  {
    label: "Top Rated",
    route: "/TopRated",
  },
  {
    label: "Most Popular",
    route: "/MostPopular",
  },
];

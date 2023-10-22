"use client";
import style from "@/styles///components/RigthSideBar/Statistic/statistic.module.css";
import SelectStatisticView from "./SelectStatisticView";
import CurrentView from "./CurrentView";
import Dropdown from "./DropDown";

export default function Statistic() {
  return (
    <section className={style.content}>
      <span className={style.text}>Your statistic</span>
      <section className={style.content_options}>
        <SelectStatisticView />
        <Dropdown />
      </section>
      <CurrentView />
    </section>
  );
}

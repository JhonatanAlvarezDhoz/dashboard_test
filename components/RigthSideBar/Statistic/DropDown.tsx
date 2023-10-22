import React, { useState } from "react";
import style from "@/styles///components/RigthSideBar/Statistic/statistic.module.css";

export default function Dropdown() {
  const [selected, setSelected] = useState("");

  function handleChange(e: {
    target: { value: React.SetStateAction<string> };
  }) {
    setSelected(e.target.value);
  }

  return (
    <select className={style.dropdowm} value={selected} onChange={handleChange}>
      <option className={style.dropdowm_item} value="option1">
        Weekly
      </option>
      <option className={style.dropdowm_item} value="option2">
        monthly
      </option>
      <option className={style.dropdowm_item} value="option3">
        annually
      </option>
    </select>
  );
}

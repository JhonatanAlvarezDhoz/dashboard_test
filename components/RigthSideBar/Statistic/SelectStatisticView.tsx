import { statistics } from "@/utils/constant";
import { useChangeStatisticView } from "@/stores/RigthSideBar/Statistic";
import CurrentView from "./CurrentView";
import style from "@/styles///components/RigthSideBar/Statistic/statistic.module.css";

export default function SelectStatisticView() {
  const [updateStaticView] = useChangeStatisticView((state) => [
    state.updateStaticView,
  ]);

  return (
    <main>
      {statistics.map((item) => (
        <button
          className={style.buttom}
          key={item.type}
          onClick={() => updateStaticView(item.type)}
        >
          {item.label}
        </button>
      ))}
    </main>
  );
}

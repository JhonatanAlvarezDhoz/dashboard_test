"use client";
import style from "@/styles///components/RigthSideBar/Statistic/statistic.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

export default function Grafic() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  var time = [0, 1.5, 2.5, 1, 4, 3, 2, 6];
  var days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  var data = {
    labels: days,
    datasets: [
      // Cada una de las líneas del gráfico
      {
        label: "",
        data: time,
        tension: 0.4,
        fill: false,
        borderColor: "rgb(0, 0, 0)",
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        pointRadius: 5,
        pointBorderColor: "rgba(0, 0, 0)",
        pointBackgroundColor: "rgba(0, 0, 0)",
      },
    ],
  };

  var options = {
    scales: {
      y: {
        min: 0,
      },
      x: {
        ticks: { color: "rgb(0, 0, 0)" },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <section>
      <Line
        className={style.grafic}
        data={data}
        options={options}
        redraw={true}
      />
    </section>
  );
}

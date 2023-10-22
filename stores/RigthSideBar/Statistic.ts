import { create } from "zustand";

import { StatisticView } from "@/utils/constant";

interface State {
  currentStaticticView: StatisticView;
  updateStaticView: (newView: StatisticView) => void;
}

const useChangeStatisticView = create<State>((set) => ({
  currentStaticticView: StatisticView.learningHours,
  updateStaticView: (newView: StatisticView) => {
    set((_) => ({ currentStaticticView: newView }));
  },
}));

export { useChangeStatisticView };

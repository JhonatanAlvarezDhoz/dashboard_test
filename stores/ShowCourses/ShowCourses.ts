import { create } from "zustand";

import { ShowCourses } from "@/utils/constant";

interface State {
  currentShowCourse: ShowCourses;
  updateShowCourse: (newView: ShowCourses) => void;
}

const useChangeShowCourse = create<State>((set) => ({
  currentShowCourse: ShowCourses.allcourse,
  updateShowCourse: (newValue: ShowCourses) => {
    set((_) => ({ currentShowCourse: newValue }));
  },
}));

export { useChangeShowCourse };

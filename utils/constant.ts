import {
  spain,
  arrow_rigth,
  clock,
  figma,
  analog_fotagraphy,
  instagram,
  pencil,
  photo_shop,
} from "@/utils/icons";

enum StatisticView {
  learningHours,
  myCourses,
}

enum ShowCourses {
  allcourse,
  thenewest,
  toprated,
  mostpopular,
}

const statistics = [
  {
    type: StatisticView.learningHours,
    label: "Learning Hours",
  },
  {
    type: StatisticView.myCourses,
    label: "My Courses",
  },
];

const tagCourses = [
  {
    type: ShowCourses.allcourse,
    label: "All Courses",
  },
  {
    type: ShowCourses.thenewest,
    label: "The Newest",
  },
  {
    type: ShowCourses.toprated,
    label: "Top Rated",
  },
  {
    type: ShowCourses.mostpopular,
    label: "Most Popular",
  },
];

const courses = [
  {
    icon: figma,
    title: "Learn Figma",
    subtitle: "by Christopher Morgan",
    duration: "6h 30min",
    rated: 4.9,
    text_buttom: "View Course",
  },
  {
    icon: analog_fotagraphy,
    title: "Analog photography",
    subtitle: "by Gordon Norman",
    duration: "3h 15min",
    rated: 4.7,
    text_buttom: "View Course",
  },
  {
    icon: instagram,
    title: "Master Instagram",
    subtitle: "by Sophie Gill",
    duration: "7h 40min",
    rated: 4.6,
    text_buttom: "View Course",
  },
  {
    icon: pencil,
    title: "Basics of drawing",
    subtitle: "by Jean Tate",
    duration: "11h 30min",
    rated: 4.8,
    text_buttom: "View Course",
  },
  {
    icon: photo_shop,
    title: "Photoshop - Essence",
    subtitle: "by David Green",
    duration: "5h 35min",
    rated: 4.7,
    text_buttom: "View Course",
  },
  {
    icon: clock,
    title: "Time optimization",
    subtitle: "by Jean Tate",
    duration: "11h 30min",
    rated: 4.2,
    text_buttom: "View Course",
  },
  {
    icon: arrow_rigth,
    title: "The power of yes I can",
    subtitle: "by Christopher Morgan",
    duration: "6h 30min",
    rated: 4.1,
    text_buttom: "View Course",
  },

  {
    icon: spain,
    title: "Spanish B2",
    subtitle: "by Alejandro Velzaques",
    duration: "6h 30min",
    rated: 4.1,
    text_buttom: "View Course",
  },
];

const listTopRated = [
  {
    icon: pencil,
    title: "Basics of drawing",
    subtitle: "by Jean Tate",
    duration: "11h 30min",
    rated: 4.8,
    text_buttom: "View Course",
  },
  {
    icon: figma,
    title: "Learn Figma",
    subtitle: "by Christopher Morgan",
    duration: "6h 30min",
    rated: 4.9,
    text_buttom: "View Course",
  },
];

const listNewest = [
  {
    icon: clock,
    title: "Time optimization",
    subtitle: "by Jean Tate",
    duration: "11h 30min",
    rated: 4.2,
    text_buttom: "View Course",
  },
  {
    icon: arrow_rigth,
    title: "The power of yes I can",
    subtitle: "by Christopher Morgan",
    duration: "6h 30min",
    rated: 4.1,
    text_buttom: "View Course",
  },
];

const listPopular = [
  {
    icon: spain,
    title: "Spanish B2",
    subtitle: "by Alejandro Velzaques",
    duration: "6h 30min",
    rated: 4.1,
    text_buttom: "View Course",
  },
];

export {
  StatisticView,
  ShowCourses,
  statistics,
  courses,
  tagCourses,
  listTopRated,
  listNewest,
  listPopular,
};

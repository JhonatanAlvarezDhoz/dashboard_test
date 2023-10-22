enum StatisticView {
  learningHours,
  myCourses,
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

export { StatisticView, statistics };

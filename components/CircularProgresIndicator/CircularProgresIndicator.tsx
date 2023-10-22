import React from "react";
import { CircularProgress } from "@nextui-org/progress";
import style from "@/styles/components/CircularProgresInticator/circular.module.css";

export default function CircularProgresIndicatior() {
  return (
    <CircularProgress
      size="lg"
      aria-label="Loading..."
      value={83}
      color="danger"
      showValueLabel={true}
    />
  );
}

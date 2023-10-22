import style from "@/styles/components/CardCourse/basecardcourse.module.css";

import Image from "next/image";
import Buttom from "./Buttom";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";
interface Props {
  alt: string;
  title: String;
  subtitle: String;
  icon: StaticImport;
  children: ReactNode;
  text_buttom: String;
}

export default function BaseCardCourse({
  icon,
  title,
  subtitle,
  children,
  text_buttom,
  alt,
}: Props) {
  return (
    <section className={style.card_content}>
      <section className={style.content_incon_course}>
        <Image src={icon} alt={alt} />
      </section>
      <section className={style.content_text}>
        <span className={style.title}>{title}</span>
        <span className={style.subtitle}>{subtitle}</span>
      </section>
      <section>{children}</section>
      <section className={style.buttom}>
        <Buttom text={text_buttom} />
      </section>
    </section>
  );
}

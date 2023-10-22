import style from "@/styles/components/CardCourse/buttom.module.css";
interface Props {
  text: String;
}

export default function Buttom({ text }: Props) {
  return (
    <section className={style.buttom}>
      <span className={style.text}>{text}</span>
    </section>
  );
}

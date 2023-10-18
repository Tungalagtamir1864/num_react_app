import React from "react";
import css from "./style.module.css";

const curricilum = () => {
  return (
    <section className={css.intro}>
      <h1 className={css.title}>Сүүлд нийтлэгдсэн </h1>
      <h2 className={css.title2}> мэдээ, мэдээлэл</h2>
      <div className={css.container}></div>
    </section>
  );
};

export default curricilum;

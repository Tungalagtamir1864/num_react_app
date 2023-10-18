import React from "react";
import css from "./style.module.css";

const Intro = () => {
  return (
    <div>
      <section className={css.intro}>
        <h1 className={css.title}>Манай сургуулийн </h1>
        <h2 className={css.title2}>Алсын хараа, эрхэм зорилго</h2>
        <div className={css.container}>
          <div className={css.item}>
            <p className={css.title3}>Алсын хараа</p>
            <p className={css.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              convallis leo vitae neque aliquam, in consectetur urna molestie.
              Integer quis sagittis quam, et commodo neque. Sed interdum urna
              tellus, eget volutpat sapien fringilla sit amet. Morbi ac
              
            </p>
          </div>
          <div className={css.item}>
            <p className={css.title3}>Эрхэм зорилго</p>
            <p className={css.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              convallis leo vitae neque aliquam, in consectetur urna molestie.
              Integer quis sagittis quam, et commodo neque. Sed interdum urna
              tellus, eget volutpat sapien fringilla sit amet. Morbi ac
             
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Intro;

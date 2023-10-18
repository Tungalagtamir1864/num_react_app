import React from "react";
import css from "./style.module.css";

import { Link } from "react-router-dom";
import home1 from "../../../assets/images/base-bg-1.png";
import home2 from "../../../assets/images/base-bg-2.png";
import home3 from "../../../assets/images/base-bg-3.jpg";

const Cards = () => {
  return (
    <section >
      <div  className={css.container}>
      <Link to="/Baklavar" className={css.item}>
        <div className={css.before}></div>
        <img src={home1} alt="Миний зураг" />
        <p className={css.text}>
          <strong>Сургалтын хөтөлбөр</strong>
          <br />
          үйл ажиллагаа
        </p>
      </Link>

      <Link to="/News" className={css.item}>
        <div className={css.before}></div>
        <img src={home3} alt="Миний зураг" />
        <p className={css.text}>
          <strong>Судалгаа</strong>
          <br />
          эрдэм шинжилгээ
        </p>
      </Link>

      <Link to="/News" className={css.item}>
        <div className={css.before}></div>
        <img src={home2} alt="Миний зураг" />
        <p className={css.text}>
          <strong>Элсэгс, суралцагчдад<br></br> чиглэсэн</strong>
          <br />
          үйл ажиллагаа
        </p>
      </Link>
      </div>
    </section>
  );
};

export default Cards;

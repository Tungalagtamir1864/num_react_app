import React from "react";
import css from "./style.module.css";

import { Link } from "react-router-dom";

const Zarlal = () => {
  return (
    <section className={css.zar}>
      <h1 className={css.title}>Сүүлд нийтлэгдсэн </h1>
      <h2 className={css.title2}> 3арлал</h2>

      <div className={css.container}>
        <Link to="/Baklavar" className={css.item}>
          <div>
            <div className={css.before}>2022-03-08 08:00:00</div>
            <div className={css.after}>
              “Төгсөлтийн тайлан бичихэд LATEX хэрэглэх нь” сэдэвт сургалт
            </div>
          </div>
        </Link>
        <Link to="/Baklavar" className={css.item}>
          <div>
            <div className={css.before}>2022-03-08 08:00:00</div>
            <div className={css.after}>
              “Төгсөлтийн тайлан бичихэд LATEX хэрэглэх нь” сэдэвт сургалт
            </div>
          </div>
        </Link>
        <Link to="/Baklavar" className={css.item}>
          <div>
            <div className={css.before}>2022-03-08 08:00:00</div>
            <div className={css.after}>
              “Төгсөлтийн тайлан бичихэд LATEX хэрэглэх нь” сэдэвт сургалт
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
};

export default Zarlal;

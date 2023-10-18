import React from "react";
import css from "./style.module.css";
import home1 from "../../../assets/images/newsImage-1-1.jpg";
import home2 from "../../../assets/images/home-slide-2.jpg";
import home3 from "../../../assets/images/home-slide-3.jpg";

const HomeNews = () => {
  return (
    <section className={css.intro}>
      <h1 className={css.title}>Сүүлд нийтлэгдсэн </h1>
      <h2 className={css.title2}> мэдээ, мэдээлэл</h2>
      <div className={css.container}>
        <a href="/Newsdetail">
          <div className={css.square}>
            <img src={home1} className={`${css.mask} ${css.item}`} alt="Image Alt Text" />
            <div className={`${css.date} ${css.item}` }>
            Нийтэлсэн огноо:2023/09/17
            </div>
            <div className={`${css.h2} ${css.item}` }>
            ХШУИС-ийн оюутны эрдэм шинжилгээний хурал болж шагналт байрууд тодорлоо
            </div>
            </div>
        </a>
        <a href="/Newsdetail">
          <div className={css.square}>
            <img src={home2} className={`${css.mask} ${css.item}` }alt="Image Alt Text" />
            <div className={`${css.date} ${css.item}` }>
              Нийтэлсэн огноо:2023/09/17
            </div>
            <div className={`${css.h2} ${css.item}` }>
              ХШУИС-ийн оюутны эрдэм шинжилгээний хурал болж шагналт байрууд
              тодорлоо
            </div>
          
          </div>
        </a>
        <a href="/Newsdetail">
          <div className={css.square}>
            <img src={home3} className={`${css.mask} ${css.item}`} alt="Image Alt Text" />
            <div className={`${css.date} ${css.item}` }>
              Нийтэлсэн огноо:2023/09/17
            </div>
           <div className={`${css.h2} ${css.item}` }>
              МУИС-ийн МКУТ-ийн багш Б.Магсаржав докторын зэргээ амжилттай
              хамгааллаа
            </div>
            
          </div>
        </a>

      </div>
    </section>
  );
};

export default HomeNews;

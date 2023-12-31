import React from "react";
import css from "./style.module.css";
import Intro from "../../Introduction";
import Statistic from "../../statistic";

const UniversityInto = () => {


  return (
    <div>
      <section className={css.about}>
        <div className={css.content}>
          <h3 className={css.about_title}>
            Мэдээлэлийн технологи, электроникийн cургууль
          </h3>
          <p>
            Мэдээлэл, компьютерийн ухааны cургууль нь Нэгдсэн Үндэстний Их
            Сургуулийн Макао дахь Олон Улсын Програм Хангамжийн Технологийн
            хүрээлэн, ОХУ-ын Дубна дахь Цөмийн Шинжилгээний Нэгдсэн Институт,
            Москвагийн улсын их сургууль, Эрхүүгийн их сургууль, Германы
            Гумбольтдын их сургууль, Кемнитцийн их сургууль, Японы Токиогийн их
            сургууль, Ивате их сургууль, Францын Тулузын их сургууль зэрэг 10
            гаруй их сургуулиудтай эрдэм шинжилгээний хурал семинар, сургалт
            зохион явуулах, багш нарын мэргэжлийг дээшлүүлэх, мэргэжлийн ном
            сэтгүүл солилцох зэргээр хамтран ажилладаг. Өдгөө тус сургуулийн 10
            гаруй багш өндөр хөгжилтэй орнуудын их дээд сургуульд алгебр,
            магадлалын онол, геометр, тооцон бодох математик, програм хангамжийн
            чиглэлээр магистрантур, докторантурт суралцаж байна.
          </p>
        
          
        </div>
        
      </section>
      <Intro/>
        <Statistic/>
    </div>
  );
};

export default UniversityInto;

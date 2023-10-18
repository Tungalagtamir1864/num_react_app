import React from "react";
import css from "./style.module.css";
import Header from '../../../Home/Header/Header';
import Footer from "../../../Home/Footer/Footer";
import newsImage from '../../../../assets/images/home-slide-1.jpg'

const Newsdetail = () => {
  return (
    <div>
      <div className={css.contentDivList}>
        <b className={`${css.contentDivListTitle} ${css.nolink}`}>
          ХШУИС-ийн оюутны эрдэм шинжилгээний хурал болж шагналт байрууд тодорлоо
        </b>
        <div className={css.date}>
          <i className={`icon-calendar ${css.iconCalendar}`} title="Огноо"></i>{" "}
          2023.05.09
        </div>
        <p className={css.details}>
          ХШУИС–ийн 2022-2023 оны хичээлийн жилийн Оюутны дунд эрдэм шинжилгээний
          хурал 2023 оны 4 сарын 27, 28–ны өдрүүдэд амжилттай зохион байгуулагдаж
          өндөрлөлөө. Оюутны эрдэм шинжилгээний хурал “Хэрэглээ” болон “Инженер,
          технологи”-ийн гэсэн хоёр салбарт тус тусдаа зохион байгуулагдсан.
        </p>

        <img className={css.newsImageItem} src={newsImage} alt="" />
        <div className={css.details}>
          Энэхүү хоёр салбар тус бүрд тэнхимийн эрдэм шинжилгээний хурлаас
          шалгарсан илтгэлүүд бакалавр болон ахисан түвшний гэсэн ангиллаар
          хэлэлцэгдсэн бөгөөд дараах комиссын үнэлгээгээр илтгэлүүд шагналт
          байранд шалгарсан байна. 
        </div>

        <div className={css.contentDivListTitleInfo}>
          <h2>“Хэрэглээ”-ний салбар, Бакалаврын түвшин:</h2>
          <div className={css.info}>
            <ul>
              <li>
                title="1-р байр:"
                director="С.Хүслэн, Н.Жавхлан “Улаан буудайн зурган дээр машин сургалт ашиглах нь” удирдагч А.Галтбаяр"
              </li>
              <li>
                title="2-р байр:"
                director="Г.Оргил “Хот суурин газрын хиймэл нууруудын усны чанарын босоо тархалтын судалгаа” удирдагч Б.Ариунсанаа"
              </li>
              <li>
                title="3-р байр:"
                director="Б.Мандахбаяр “Мал тооллогын системийн туршилт, хөгжүүлэлт” удирдагч Б.Гэрэлмаа"
              </li>
              <li>
                title="4-р байр:"
                director="Ц.Төгсхүслэн “Монгол орны зэсийн уурхайн хүчиллэг уснаас хемолитоавтотроф бактери ялгаж био уусгалт явуулах” удирдагч Д.Эрдэнэчимэг"
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsdetail;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // react-router-dom-оос Link компонентийг импортлоно
import css from "./style.module.css";
import instance from "../../../../axios-orders.js"; // axios-ын тохиргоо авч байна

function NewPost() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await instance.get("/orders.json"); // Firebase-с мэдээллийг унших
        const newsData = response.data;

        // newsData объектын утгыг нийтлэлүүд болгож ашиглах
        const newsArray = Object.values(newsData);

        // Хэрвээ postType талбартай мэдээлэл "post" байвал зөвхөн хэвлэх байдлаар хийх
        const filteredNews = newsArray.filter(
          (item) => item.postType === "post"
        );

        setNews(filteredNews);
      } catch (error) {
        console.error("Уншихад алдаа гарлаа: ", error);
      }
    };

    fetchNews();
  }, );

  return (
    <section className={css.intro}>
      <h1 className={css.title}>Сүүлд нийтлэгдсэн</h1>
      <h2 className={css.title2}> мэдээ, мэдээлэл</h2>
      {news.map((item) => (
        // Link компонентийг хэрэглэн мэдээний дэлгэц руу шилжих
        <Link to={`/news/${item.id}`} key={item.id} className={css.squareLink}>
          <div className={css.square}>
            <img
              src={item.photo} alt={`Зураг - ${item.title}`}
              className={`${css.mask} ${css.item}`}
              
            />
            <div className={`${css.date} ${css.item}`}>
              Нийтэлсэн огноо: {item.date} 
            </div>
            <div className={`${css.h2} ${css.item}`}>{item.title}</div>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default NewPost;

import React, { Component } from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";
import axios from "../../../../axios-orders.js";
import Header from "../../../Home/Header/Header";
class News extends Component {
  state = {
    newsData: null, // Дата-г хадгалах хувьсагч
  };

  componentDidMount() {
    axios.get('/orders.news.json')
      .then(response => {
        const newsData = response.data || []; // Серверээс ирсэн дата, хоосон массив байх болно
        this.setState({ newsData }); // State-д хадгалах
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    <Header/>
    const { newsData } = this.state;

    if (!newsData) {
      return <div>Loading...</div>; // Дата уншиж байгаа эсэхийг шалгаж, уншиж байхаас өмнө харагдах агуулга
    }
    console.log(newsData);
    return (
      <section className={css.intro}>
        <h1 className={css.title}>Сүүлд нийтлэгдсэн</h1>
        <h2 className={css.title2}> мэдээ, мэдээлэл</h2>
       { <div className={css.container}>
          {newsData.map((news) => (
            <Link to="/Newsdetail" key={news.id} className={css.squareLink}>
              <div className={css.square}>
                <img src={news.photo} className={`${css.mask} ${css.item}`} alt="News Image" />
                <div className={`${css.date} ${css.item}`}>Нийтэлсэн огноо: {news.date}</div>
                <div className={`${css.h2} ${css.item}`}>{news.title}</div>
              </div>
            </Link>
          ))}
        </div>}
      </section>
    );
  };
};

export default News;

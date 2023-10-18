import React, { useState } from "react";
import styles from "./style.module.css"; // Импорт хийх

import home from "../../../assets/images/home.jpg";
import Header from "../../Home/Header/Header";
import Footer from "../../Home/Footer/Footer";
import Rich from "../PostZarlal/RichText";
const SubMenuPost = () => {
  const [hotolbor, sethotolbor] = useState("Нийтлэл оруулах");

  return (
    <div>
      <Header />
      <section className={styles.into}>
        <h1 className={styles.header}>{hotolbor}</h1>
        <img className={styles.img} src={home} alt="home" />
      </section>

      <nav className={styles.navbar}>
        <a
          className={styles.a}
          onClick={() => sethotolbor("Нийтлэл оруулах")}
        >
          Нийтлэл оруулах
        </a>
        <a
          className={styles.a}
          onClick={() => sethotolbor("Зарлал оруулах")}
        >
          Зарлал оруулах
        </a>
        <a
          className={styles.a}
          onClick={() => sethotolbor("Ивэнт оруулах")}
        >
          Ивэнт оруулах
        </a>
        <a className={styles.a} href="/contact">
          Багш, ажилтан
        </a>
      </nav>
      <div>
        <div>
          {hotolbor === "Нийтлэл оруулах" ? (
            <Rich hotolbor="post"/>
          ) : hotolbor === "Зарлал оруулах" ? (
            <Rich hotolbor="zarlal"/>
          ) : (
            <Rich hotolbor="event"/>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubMenuPost;

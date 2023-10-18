import React, { useState } from "react";
import styles from "./style.module.css"; // Импорт хийх

import home from "../../../assets/images/home.jpg";
import DirectorInfo from "../director/derector";
import UniversityInto from "../University/UniversityInto";
import TeacherMenu from "../Teachers/TeacherMenu";
import Header from "../../Home/Header/Header";
import Footer from "../../Home/Footer/Footer";


const SubMenu = () => {
  const [hotolbor, sethotolbor] = useState("Захирлын мэндчилгээ");

  return (
    <div>
    <Header/>
      <section className={styles.into}>
        <h1 className={styles.header}>{hotolbor}</h1>
        <img className={styles.img} src={home} alt="home" />
      </section>

      <nav className={styles.navbar}>
        <a className={styles.a} onClick={() => sethotolbor("Захирлын мэндчилгээ")}>
        Захирлын мэндчилгээ
        </a>
        <a className={styles.a} onClick={() => sethotolbor("Сургуулийн танилцуулга")}>
        Сургуулийн танилцуулга
        </a>
        <a className={styles.a} onClick={() => sethotolbor("Багш, ажилтан")}>
        Багш, ажилтан
        </a>
        <a className={styles.a} href="/contact">
        Багш, ажилтан
        </a>
      </nav>
      <div>
        <div>
          {hotolbor === "Захирлын мэндчилгээ" ? (
            <DirectorInfo />
          ) : hotolbor === "Сургуулийн танилцуулга" ? (
            <UniversityInto />
          ) : (
            <TeacherMenu />
          )}
        </div>
      </div>
    <Footer/>
    </div>
  );
};

export default SubMenu;
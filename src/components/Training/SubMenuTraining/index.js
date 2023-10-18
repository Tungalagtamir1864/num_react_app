import React, { useState } from "react";
import styles from "./style.module.css"; // Импорт хийх

import home from "../../../assets/images/home.jpg";
import MagistrHotolbor from "../magistr/magistr";
import BakalavrHotolbor from "../baklavar/baclavar";
import DoctorHotolbor from "../doctor/doctor";
const SubMenuTraining = () => {
  const [hotolbor, sethotolbor] = useState("Баклаварын хөтөлбөр");

  return (
    <div>
      <section className={styles.into}>
        <h1 className={styles.header}>{hotolbor}</h1>
        <img className={styles.img} src={home} alt="home" />
      </section>

      <nav className={styles.navbar}>
        <a className={styles.a} onClick={() => sethotolbor("Баклаварын хөтөлбөр")}>
          Баклаварын хөтөлбөр
        </a>
        <a className={styles.a} onClick={() => sethotolbor("Магистрийн хөтөлбөр")}>
          Магистрийн хөтөлбөр
        </a>
        <a className={styles.a} onClick={() => sethotolbor("Докторын хөтөлбөр")}>
          Докторын хөтөлбөр
        </a>

      </nav>
      <div>
        <div>
          {hotolbor === "Баклаварын хөтөлбөр" ? (
            <BakalavrHotolbor />
          ) : hotolbor === "Магистрийн хөтөлбөр" ? (
            <MagistrHotolbor />
          ) : (
            <DoctorHotolbor />
          )}
        </div>
      </div>
    </div>
  );
};

export default SubMenuTraining;

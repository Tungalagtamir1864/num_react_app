import React from "react";
import css from "./style.module.css";
import home from "../../../assets/images/home.jpg"; 
const FileHeader = () => {
  return (
    <section className={css.into}>
        <h1 className={css.header}>Файлын сан</h1>
        <img className={css.img} src={home} alt="home" />
    </section>
  );
};

export default FileHeader;

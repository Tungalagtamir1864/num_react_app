import React from "react";
import css from "./style.module.css";
import ETGHFile from "../../../../assets/file/ETGH.pdf";

const DoctorHotolbor = () => {
  const dataCOM = [
    {
      HName: "Компьютерын ухаан",
      index: "F 061301",
      downLink: ETGHFile,
    },
    {
      HName: "Мэдээллийн технологи",
      index: "F 061304",
      downLink: ETGHFile,
    },
    {
      HName: "Программ хангамж",
      index: "F 061302",
      downLink: ETGHFile,
    },
  ];
  const dataELE = [
    {
      HName: "Электроникийн инженерчлэл",
      index: "F 071401",
      downLink: ETGHFile,
    },
 
  ];
  const handleDownload = (downLink) => {
    window.open(downLink, "_blank"); // Файлыг шинэ цонхоор нээх
  };

  return (
    <section className={css.into}>
      <h1 className={css.header}>МЭДЭЭЛЭЛ, КОМПЬЮТЕРИЙН УХААНЫ ТЭНХИМ</h1>
      <table className={css.table}>
        <thead className={css.head}>
          <tr className={css.bagana}>
            <th>Хөтөлбөрийн нэр</th>
            <th>Индекс</th>
            <th>Сургалтын төлөвлөгөө</th>
          </tr>
        </thead>
        <tbody className={css.body}>
          {dataCOM.map((item, index) => (
            <tr key={index} className={css.bagana}>
              <td><a href="/BaklavarSD">{item.HName}</a></td>
              <td>{item.index}</td>
              <td>
                <button
                  className={css.buttonsee}
                  onClick={() => handleDownload(item.downLink)}
                >
                  Файлаар харах
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className={css.header}>ЭЛЕКТРОНИК, ХОЛБООНЫ ИНЖЕНЕРЧЛЭЛИЙН ТЭНХИМ</h1>
      <table className={css.table}>
        <thead className={css.head}>
          <tr className={css.bagana}>
            <th>Хөтөлбөрийн нэр</th>
            <th>Индекс</th>
            <th>Сургалтын төлөвлөгөө</th>
          </tr>
        </thead>
        <tbody className={css.body}>
          {dataELE.map((item, index) => (
            <tr key={index} className={css.bagana}>
              <td>
                <a href="/BaklavarSD">{item.HName}</a>
              </td>

              <td>{item.index}</td>
              <td>
                <button
                  className={css.buttonsee}
                  onClick={() => handleDownload(item.downLink)}
                >
                  Файлаар харах
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default DoctorHotolbor;

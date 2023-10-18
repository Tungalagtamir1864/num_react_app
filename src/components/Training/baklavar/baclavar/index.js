import React from "react";
import css from "./style.module.css";
import ETGHFile from "../../../../assets/file/ETGH.pdf";

const BakalavrHotolbor = () => {
  const dataCOM = [
    {
      HName: "Компьютерын ухаан",
      index: "D 061301",
      downLink: ETGHFile,
    },
    {
      HName: "Мультимедиа технологи",
      index: "D 061203",
      downLink: ETGHFile,
    },
    {
      HName: "Мэдээллийн систем",
      index: "D 061303",
      downLink: ETGHFile,
    },
    {
      HName: "Мэдээллийн технологи",
      index: "D 061304",
      downLink: ETGHFile,
    },
    {
      HName: "Программ хангамж",
      index: "D 061302",
      downLink: ETGHFile,
    },
  ];
  const dataELE = [
    {
      HName: "Компьютерын сүлжээ",
      index: "D 061201",
      downLink: ETGHFile,
    },
    {
      HName: "Сэргээгдэх эрчим хүч",
      index: "D 071301",
      downLink: ETGHFile,
    },
    {
      HName: "Холбооны технологи",
      index: "D 071406",
      downLink: ETGHFile,
    },
    {
      HName: "Электроникийн инженерчлэл",
      index: "D 071401",
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

export default BakalavrHotolbor;

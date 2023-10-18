import React from "react";
import css from "./style.module.css";
import ETGHFile from "../../../../assets/file/ETGH.pdf";

const MagistrHotolbor = () => {
  const dataCOM = [
    {
      HName: "Өгөгдлийн сангийн загварчлал, удирдлага",
      index: "E 061205",
      downLink: ETGHFile,
    },
    {
      HName: "Өгөгдлийн ухаан",
      index: "E 061204",
      downLink: ETGHFile,
    },
    {
      HName: "Компьютер-хэл шинжлэл",
      index: "E 068801",
      downLink: ETGHFile,
    },
    {
      HName: "Компьютерын ухаан",
      index: "E 061301",
      downLink: ETGHFile,
    },
    {
      HName: "Мэдээллийн систем",
      index: "E 061303",
      downLink: ETGHFile,
    },
    {
      HName: "Мэдээллийн технологи",
      index: "E 061304",
      downLink: ETGHFile,
    },
    {
      HName: "Программ хангамж",
      index: "E 061302",
      downLink: ETGHFile,
    },
  ];
  const dataELE = [
    {
      HName: "Компьютерын сүлжээ",
      index: "E 061201",
      downLink: ETGHFile,
    },
    {
      HName: "Сэргээгдэх эрчим хүч",
      index: "E 071301",
      downLink: ETGHFile,
    },
    {
      HName: "Электроникийн инженерчлэл",
      index: "E 071401",
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

export default MagistrHotolbor;

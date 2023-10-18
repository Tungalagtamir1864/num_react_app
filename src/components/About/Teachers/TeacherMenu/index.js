import React, { useState } from "react";
import css from "./style.module.css";
import teacher1 from "../../../../assets/images/teacher-1.jpg";

const TeacherMenu = () => {
  const [open, setOpen] = useState("");
  const zahirgaa = [
    {
      name: "Н.Оюун",
      position: "Профессор, Тэнхимийн эрхлэгч",
      email: "oyunerdene@num.edu.mn",
      email2: "oyunerdene@seas.num.edu.mn",
      phone: "75754400, 77307730 - 3400",
      location: "Хичээлийн байр 3А-212",
    },
  ];

  const electronic = [
    {
      name: "Н.electronic",
      position: "Профессор, Тэнхимийн эрхлэгч",
      email: "oyunerdene@num.edu.mn",
      email2: "oyunerdene@seas.num.edu.mn",
      phone: "75754400, 77307730 - 3400",
      location: "Хичээлийн байр 3А-212",
    },
  ];

  const medeelel = [
    {
      name: "Оюун-Эрдэнэ",
      position: "Профессор, Тэнхимийн эрхлэгч",
      email: "oyunerdene@num.edu.mn",
      email2: "oyunerdene@seas.num.edu.mn",
      phone: "75754400, 77307730 - 3400",
      location: "Хичээлийн байр 3А-212",
    },
  ];

  let selectedTeacher;

  if (open === "medeelel") {
    selectedTeacher = medeelel;
  } else if (open === "electronic") {
    selectedTeacher = electronic;
  } else {
    selectedTeacher = zahirgaa;
  }

  return (
    <section className={css.con}>
      <div className={css.coni}>
        <nav className={`${css.accordion} ${css.arrows}`}>
          <header className={css.box}>
            <label
              htmlFor="acc-close"
              className={`${css.box_title} ${open ? css["box-open"] : ""}`}
              onClick={() => setOpen("")}
            >
              Мэдээлэл, компьютерийн ухааны сургууль
            </label>
          </header>

          <input
            type="radio"
            name="accordion"
            id="cb1"
            value="zahirgaa"
            onClick={() => setOpen("zahirgaa")}
          />
          <section className={css.box}>
            <label className={css.box_title} htmlFor="cb1">
              Захиргаа
            </label>
            <label className={css.box_close} htmlFor="acc-close"></label>
          </section>

          <input
            type="radio"
            name="accordion"
            id="cb2"
            value="medeelel"
            onClick={() => setOpen("medeelel")}
          />
          <section className={css.box}>
            <label className={css.box_title} htmlFor="cb2">
              Мэдээлэл, компьютерийн ухааны тэнхим
            </label>
            <label className={css.box_close} htmlFor="acc-close"></label>
          </section>

          <input
            type="radio"
            name="accordion"
            id="cb3"
            value="electronic"
            onClick={() => setOpen("electronic")}
          />
          <section className={css.box}>
            <label className={css.box_title} htmlFor="cb3">
              Электроник, холбооны инжнерчлэлийн тэнхэм
            </label>
            <label className={css.box_close} htmlFor="acc-close"></label>
          </section>
          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </div>
      <div className={css.coni}>
        <div className={css.teach}>
          {selectedTeacher.map((teacher, index) => (
            <div className={css.teacher} key={index}>
              <div className={css.head}>
                <div className={css.headItem}>
                  <img src={teacher1} alt={teacher.name} />
                </div>
                <div className={css.headItem}>
                  <h1>{teacher.name}</h1>
                  <p>{teacher.position}</p>
                </div>
              </div>
              <div className={css.teacherContainer}>
                <p className={`${css.item} ${css.mail}`}>{teacher.email}</p>
                <p className={`${css.item} ${css.mail2}`}>{teacher.email2}</p>
                <p className={`${css.item} ${css.call}`}>{teacher.phone}</p>
                <p className={`${css.item} ${css.loc}`}>{teacher.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherMenu;

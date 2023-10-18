import React from "react";
import css from "./style.module.css";
import Footer from "../../../Home/Footer/Footer";
import Header from "../../../Home/Header/Header";

const MS = () => {
  return (
    <div>
      <Header/><section className={css.intro}>
        <h1 className={css.title}>Бакалаврын хөтөлбөр</h1>
        <h2 className={css.title2}>Мэдээллийн систем</h2>
        <div className={css.container}>
          <div className={css.item}>
            <p className={css.title3}>Хөтөлбөрийн зорилго</p>
            <p>
              Энэхүү хөтөлбөрөөр суралцан төгсөгчдөд байгууллага, бизнесийн үйл
              ажиллагааг дэмжин ажиллах мэдээллийн системийн хэрэгцээ шаардлагыг
              тодорхойлох, шинжлэн судлах, системийг зохиомжлох, хөгжүүлэх,
              цаашилбал мэдээллийн системийн ашиглалт, сайжруулалтыг хариуцан
              ажиллах мэдлэг, ур чадварыг эзэмшүүлэх зорилготой.
            </p>
          </div>
          <div className={css.item}>
            <p className={css.title3}>Эзэмших мэдлэг</p>
            <p>
              Мэдээлэл, харилцаа холбооны технологи, мэдээллийн системийн
              стратеги төлөвлөлт ба удирдлага, мэдээллийн системийн хөгжүүлэлт
              ба хэрэгжүүлэлт, байгууллагын үйл ажиллагааг гүйцэтгэлийн түвшнээс
              удирдлагын түвшинд ойлгож бизнес процессыг дэмжих мэдлэг, ур
              чадвар олгоно.
            </p>
          </div>
        </div>
        <div>
          <h3 className={css.Urchadvar}>ЭЗЭМШИХ МЭРГЭЖЛИЙН УР ЧАДВАРУУД </h3>
          <div className={css.tomItem}>
            <div className={`${css.subItem}`} id={css.one}>
              Мэдээллийн системийн стратеги төлөвлөлт хийх мэдээллийн системийн
              хөгжүүлэлтэд оролцох Байгууллагын хэлтийн төлөв болон түүний үйл
              ажиллагаанд тохирсон мэдээллийн системийг тодорхойлох
            </div>
            <div className={`${css.subItem}`} id={css.two}>
              Байгууллагын бизнесийн процессыг судалсны үндсэн дээр мэдээллийн
              системийн үйл ажиллагааг түүнд тохируулан зохион байгуулах
              Бизнесийн үйл ажиллагааг шинжлэн судалсны бизнесийн болон
              техникийн шаардлагыг тодорхойлох
            </div>
            <div className={`${css.subItem}`} id={css.three}>
              Шаардлагын шинжилгээнд ундалов мод системийг шинжлах, зохиомжлох,
              хөгжүүлэх, турших, хэрэгжүүлэх Мэдээллийн системийн хөгжүүлэлтийн
              ажиллагааг төлөөлөх, удирдах
            </div>
          </div>
        </div>
        <div>
          <h3 className={css.Urchadvar}>
            МЭРГЭЖИЛТНИЙ ЭРЭЛТ ХЭРЭГЦЭЭ, АЖЛЫН БАЙР
          </h3>
          <div className={css.container}>
            <div className={css.item}>
              Мэдээллийн аюулгүй байдлын аналист /information Security Analyst/
              Мэдээллийн технологийн аудитор //Т Auditor/ Системийн аналист
              /Systems Analyst/
              <ul>
                Мэдээллийн системийн менежер /information Systems Manager/
              </ul>
              <ul>Програм аналист /Application Analyst/</ul>
              <ul>Бизнесийн аналист /Business Analyst/</ul>
              <ul>Мэдээллийн системийн зөвлөх /15 consultant/ </ul>
              <ul>Программ хангамжийн аналист /Software analyst/ </ul>
            </div>
            <div className={css.item}>
              <ul>Борлуулалтын мэргэжилтэн /IT sales professional/</ul>
              <ul>
                Мэдээллийн технологийн төслийн менежер /IT Project Manager/{" "}
              </ul>
              <ul>Программ хангамжийн хөгжүүлэгч /Software Developer/ </ul>
              <ul>
                Мэдээллийн аюулгүй байдлын аналист /information Security
                Analyst/
              </ul>
              <ul>Мэдээллийн технологийн аудитор //Т Auditor/</ul>
            </div>
          </div>
          <div className={css.Urchadvar}>МАНАЙ ТӨГСӨГЧИД </div>
          <div className={css.barimt}>
            <div className={css.statistic} id={css.dorov}>
              <div className={css.huvi}>
                <h3>75.9%</h3>
                <p>Үндсэн мэргэжлээрээ</p>
              </div>
              <div className={css.huvi}>
                <h3>24.1%</h3>
                <p>Өөр мэргэжлээр</p>
              </div>
            </div>
            <div className={css.statistic} id={css.neg}>
              Бидний хамгийн том бахархал бол Төгсөгчид маань байдаг билээ.
              Хөтөлбөрийн төгсөгчид дотоодын банк, үүрэн телефоны оператор
              компаниуд, ІТ компани, гарааны компани болон гадаадын нэр хүнд
              бүхий олон байгууллагад амжилттай ажиллаж байна.
              <p className={css.dood}>
                Жил бүрийн төгсөгчдийн <p> 100% </p> нь дотооддоо тэргүүн
                эгнээнд ажлын байраар хангагддаг.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};
export default MS;

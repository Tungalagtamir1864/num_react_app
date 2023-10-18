import React from "react";
import css from "./style.module.css";
import Header from "../../../Home/Header/Header";
import Footer from "../../../Home/Footer/Footer";

const SD = () => {
  return (
    <div>
      <Header/>
      <section className={css.intro}>
        <h1 className={css.title}>Software Engineering D 061302</h1>
        <h2 className={css.title2}>Программ хангамж </h2>
        <div className={css.container}>
          <div className={css.item}>
            <p className={css.title3}>Хөтөлбөрийн зорилго</p>
            <p>
              Энэхүү хөтөлбөрөөр суралцан төгсөгчдөд программ хангамжийн
              бүтээгдэхүүн хөгжүүлэлтийн асуудлын хүрээнд програм хангамжийн
              инженерчлэлийн мэдлэг, чадварыг эзэмшүүлэх зорилготой.
            </p>
          </div>
          <div className={css.item}>
            <p className={css.title3}>Эзэмших мэдлэг</p>
            <p>
              Програм хангамжийн шаардлагын шинжилгээ, програм хангамжийн
              зохиомж, хөгжүүлэлт, гүйцэтгэл, чанарын үнэлгээ, баримтжуулалт,
              програм хангамжийн төслийн менежментийн суурь мэдлэг, чадварыг
              олгох юм.
            </p>
          </div>
        </div>
        <div>
          <h3 className={css.Urchadvar}>ЭЗЭМШИХ МЭРГЭЖЛИЙН УР ЧАДВАРУУД </h3>
          <div className={css.tomItem}>
            <div className={`${css.subItem}`} id={css.one}>
              Программ хангамжийн инженерчавлийн гуды иглан нийгэм, эрх зүйн
              орчин, холбогдох хууль тогтоомж журам дүрэмтай бүрэн нийцсэн, олон
              төрлийн хэрэглээний домэйнд ажиллах бүхий шийдлийн зохиомжлох.
            </div>
            <div className={`${css.subItem}`} id={css.two}>
              Мэдээллийн системийг программ хангамжийн инженерчлэлийн аргаар
              хөгжүүлж, шийдвэр гаргалтыг оновчтой болгох, боловсон хүчний
              болоод бусад бүх нөөцийг үр ашигтай хуваарилах, байгууллагын үйл
              ажиллагаа ба мэдээллийн системийн нийцэмж ба зохицлыг ханган юм.
            </div>
            <div className={`${css.subItem}`} id={css.three}>
              Тухайн байгууллагын үйл ажиллагааг хэрэглэгчийн хэрэгцээ
              шаардлагын дагуу улам боловсронгуй болгох, автоматжуулах, багаар
              ажил программ хангамж хөгжүүлэх, хэрэглэгчид хүргэх.
            </div>
          </div>
        </div>
        <div>
          <h3 className={css.Urchadvar}>
            МЭРГЭЖИЛТНИЙ ЭРЭЛТ ХЭРЭГЦЭЭ, АЖЛЫН БАЙР
          </h3>
          <p>
            Программ хангамжийн хөтөлбөрөөр төгсөгчид нь бизнесийн болоод
            судалгааны салбарт хөрвөх чадвар сайтай, олон мэргэшлээр дагнан
            ажиллах боломжтой юм.
          </p>
          <div className={css.container}>
            <div className={css.item}>
              <ul>
                Мобайл төхөөрөмжийн мэргэжилтэн /Mobile speciaulst/technologist/{" "}
              </ul>
              <ul>Программ хөгжүүлэгч /Appulcation Developer/</ul>
              <ul>Программист/Аналист /Programmer/Analyst/ </ul>
              <ul>Программ хангамжийн архитектор /Software architect/ </ul>
              <ul>Программ хангамжийн аналист /Software analyst/ </ul>
            </div>
            <div className={css.item}>
              <ul>Системийн програмист /Systems Programmer/ </ul>
              <ul>Программ хангамжийн инженер /Software Engineer/ </ul>
              <ul>Программ хангамжийн хөгжүүлэгч /Software Developer/ </ul>
              <ul>Веб хөгжүүлэгч /Web Developer/ </ul>
              <ul>Судлаач /institution Researcher/</ul>
            </div>
          </div>
          <div className={css.Urchadvar}>МАНАЙ ТӨГСӨГЧИД </div>
          <div className={css.barimt}>
            <div className={css.statistic} id={css.dorov}>
              <div className={css.huvi}>
                <h3>24.2%</h3>
                <p>Төгсөхөөс өмнө</p>
              </div>
              <div className={css.huvi}>
                <h3>45.5%</h3>
                <p>Төгсөхөөд 3 сарын дотор</p>
              </div>
              <div className={css.huvi}>
                <h3>18.1%</h3>
                <p>Төгсөхөөд 3 сараас 6 сар</p>
              </div>
              <div className={css.huvi}>
                <h3>6.3%</h3>
                <p>6 сараас 1 жил болоход</p>
              </div>
            </div>
            <div className={css.statistic} id={css.neg}>
              Бидний хамгийн том бахархал бол Төгсөгчид маань байдаг билээ.
              Хөтөлбөрийн тегсөгчид дотоодын (банк, үүрэн телефоны оператор
              компаниуд, ІТ компани, гарааны компани,...) болон гадаадын
              (Google, Sony...) нэр хүнд бүхий олон байгууллагад амжилттай
              ажиллаж байна.
              <p className={css.dood}>
                Жил бүрийн төгсөгчдийн  95,15  нь дотооддоо тэргүүн эгнээнд ажлын
                байраар хангагддаг.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};
export default SD;

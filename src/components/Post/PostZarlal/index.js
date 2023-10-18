import React from "react";
import css from "./style.module.css";
import Button from "../../General/Button";
import axios from "../../../axios-orders.js";

class PostNews extends React.Component {
  state = {
    name: null,
    title: null,
    pragrap: null,
    photo: null,
    loading: false,
  };

  changeTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  changePragrap = (e) => {
    this.setState({ pragrap: e.target.value });
  };

  changePhoto = (e) => {
    this.setState({ photo: e.target.value });
  };

  saveOrder = () => {
    // Орчин үеийн он сарыг авах
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // 0-с эхлэн байгаа учраас +1 нэмнэ

    // ID үүсгэх
    const orderId = `order_${Date.now()}`;

    const order = {
      Zarlal: {
        id: orderId,
        name: this.state.name,
        date: `${currentYear}-${currentMonth}`, // Он сарыг форматлах
        title: this.state.title,
        pragrap: this.state.pragrap,
        photo: this.state.photo,
      },
    };

    this.setState({ loading: true });

    // Серверт илгээх ажиллагааг axios ашиглан хийнэ
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log("zarlal amjilttai");
      })
      .catch((error) => {
        console.log("zarlal amjltgui: " + error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    console.log(this.props);
    return (
      <div className={css.ContactData}>
        <div>
          <input
            onChange={this.changeTitle}
            type="text"
            title="title"
            placeholder="Нийтлэлийн гарчиг"
          />
          <input
            onChange={this.changePragrap}
            type="text"
            title="pragrap"
            placeholder="Нийтлэлийн параграф"
          />
          <input
            onChange={this.changePhoto}
            type="text"
            title="photo"
            placeholder="Нийтлэлийн зураг"
          />
          <Button text="ИЛГЭЭХ" btnType="Success" daragdsan={this.saveOrder} />
        </div>
      </div>
    );
  }
}

export default PostNews;

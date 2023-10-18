import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import Button from "../../../General/Button/index.js";
import css from "./style.module.css";
import axios from "../../../../axios-orders.js";
function Rich(props) {
  const [state, setState] = useState({
    id: 1,
    postType: props.hotolbor,
    author: {
      name: null,
      email: null,
      ID: null,
    },
    title: "",
    photo: "",
    date: null,
    loading: false,
  });

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const handleUpdate = (newContent) => {
    setContent(newContent);
  };

  const saveOrder = () => {
    // Орчин үеийн он сарыг авах
    const currentDate = new Date();

    // ID үүсгэх
    const orderId = `order_${Date.now()}`;

    const newNewsItem = {
      id: orderId,
      postType: props.hotolbor,
      author: {
        name: state.authorName,
        email: state.authorEmail,
        ID: state.authorID,
      },
      date: currentDate.toISOString(),
      title: state.title,
      photo: state.photo,
    };

    setState({
      ...state,
      loading: true,
    });

    // Серверт илгээх ажиллагааг axios ашиглан хийнэ
    axios
      .post("/orders.json", newNewsItem)
      .then((response) => {
        console.log("news amjilttai");
        alert("Мэдээ амжилттай илгээгдлээ.");
      })
      .catch((error) => {
        console.log("news amjltgui: " + error);
        alert("Мэдээ илгээгдсэнгүй. Алдаа гарлаа: " + error);
      })
      .finally(() => {
        setState({
          ...state,
          loading: false,
          title: "", // Гарчигийг бүрэн цэвэрлэх
        });
        setContent("Start writing"); // Редакторын агуулгыг цэвэрлэх
      });
  };

  const changeTitle = (e) => {
    setState({ ...state, title: e.target.value });
  };
  const changePhoto = (e) => {
    setState({ ...state, photo: e.target.value });
  };
  var topic;
  if (props.hotolbor === "post") {
    topic = "Нийтлэлийн";
  } else if (props.hotolbor === "zarlal") {
    topic = "Зарлалын";
  } else {
    topic = "Ивэнтын";
  }
  return (
    <section>
      <div className={css.Rich}>
        <div className={css.ContactData}>
          <div>
            <label htmlFor="title">{topic} гарчиг оруулна уу:</label>
            <input type="text" id="title" required value={state.title}
              onChange={changeTitle}/>
          </div>
          <div>
            <label htmlFor="title">{topic} зурагны линк оруулна уу:</label>
            <input
              type="text"
              id="title"
              required
              value={state.photo}
              onChange={changePhoto}
            />
          </div>
        </div>
        <JoditEditor
          ref={editor}
          value={content}
          config={{
            readonly: false,
            height: 400,
          }}
          onBlur={(newContent) => handleUpdate(newContent)}
          onChange={(newContent) => {}}
        />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <Button text="ИЛГЭЭХ" btnType="Success" daragdsan={saveOrder} />
    {state.loading ? (
      <p>Мэдээ илгээгдлээ. Түр хүлээнэ үү...</p>
    ) : null}
  </section>
  
  );
}

export default Rich;

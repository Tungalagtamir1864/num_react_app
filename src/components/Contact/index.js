import React, { useState } from "react";
import css from './style.module.css'
const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <section>
      <div className={css.conContainer}></div>
      <div className={css.conItem}>
        <form className={css.Contactform}onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" required />
          </div>
          <button type="submit">{status}</button>
        </form>
      </div>
      <div  className={css.conItem}>
        <iframe
          height="350"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.7076320493143!2d106.91942150926205!3d47.92269429234788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692423594478d:0x8efc02246d36146d!2z0JzQo9CY0KEsINCi06nQsiDQsdCw0LnRgA!5e0!3m2!1smn!2smn!4v1416465415439"
        ></iframe>
        <div class="well">
            <h3>Мэдээ, зар хүлээн авах </h3> 
            <em>Олон нийттэй харилцах мэргэжилтэн Г.Билгүүн</em>
            <ul class="larger">
              <li><a href="#">news@num.edu.mn</a></li>
              <li>77307730-1163</li>
            </ul>
             <h3>Мэдээллийн технологийн газар </h3> 
                       <ul class="larger">
              <li><a href="#">webmaster@num.edu.mn</a></li>
              <li>77307730</li>
            </ul>

          </div>
      </div>
    </section>
  );
};

export default Contact;

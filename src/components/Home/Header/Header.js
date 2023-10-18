import React, { useState } from "react";
import Login from "../../LoginPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUser, faBars } from "@fortawesome/fontawesome-free-solid";
import logo123 from "../../../assets/images/logo.png";

import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [toggleUser, setToggleUser] = useState(false);
  const [togglebars, setTogglebars] = useState(false);

  const handleUser = () => {
    setToggleUser(!toggleUser);
  };

  const handleBars = () => {
    setTogglebars(!togglebars);
  };

  return (
    <header>
      <nav className={"navbar1"}>
        <div className="addmenu">
          <Link to="/News" className="a">
            Мэдээ
          </Link>
          <Link to="https://elselt.num.edu.mn/" className="a">
            Элсэлт
          </Link>
          <Link to="https://shilendans.gov.mn/organization/42327" className="a">
            Шилэн данс
          </Link>
          <Link to="/contact" className="a">
            Холбоо барих
          </Link>
          <Link to="/FileView" className="a">
            Файлын сан
          </Link>
          <Link to="/News" className="a">
            Эрдэм шинжилгээний хурал
          </Link>
          <Link to="/SubMenuPost" className="a">
            ICPC
          </Link>
        </div>
      </nav>
      <div className="header">
        <Link to="/" className="logo">
          <img width="300px" src={logo123} alt="Logo" className="i" />
        </Link>
        <nav className={togglebars ? "navbar active" : "navbar"}>
          <div id="close-navbar">
            <FontAwesomeIcon icon={faTimes} onClick={handleBars} />
          </div>
          <Link to="/" className="a">
            Нүүр
          </Link>
          <div className="dropdown">
            <Link to="/University" className="a">
              Бидний тухай
            </Link>
            <div className="dropdown-content">
              <Link to="/SubMenu" className="a">
                Захирлын мэндчилгээ
              </Link>
              <Link to="/SubMenu" className="a">
                Сургуулийн танилцуулга
              </Link>
              <Link to="/SubMenu" className="a">
                Багш, ажилтан
              </Link>
            </div>
          </div>
          <div className="dropdown">
            <Link to="/courses" className="a">
              Сургалт
            </Link>
            <div className="dropdown-content">
              <Link to="/Baklavar" className="a">
                Баклавар
              </Link>
              <Link to="/Magistr" className="a">
                Магистр
              </Link>
              <Link to="/Doctor" className="a">
                Доктор
              </Link>
            </div>
          </div>
          <Link to="/courses" className="a">
            Судалгаа
          </Link>
          <Link to="/contact" className="a">
            Суралцагч
          </Link>
          <Link to="/Login" className="a"></Link>
        </nav>

        <div className="icons">
          <div id="account-btn">
            <Link to="/Login">
              <FontAwesomeIcon icon={faUser} onClick={handleUser} />
            </Link>
            {toggleUser ? <Login /> : null}
          </div>

          <div id="menu-btn">
            <FontAwesomeIcon icon={faBars} onClick={handleBars} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

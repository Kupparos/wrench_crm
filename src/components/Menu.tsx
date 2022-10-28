import React, { useState } from "react";
import "../styles/menu.scss";
import { Link } from "react-router-dom";
import calendar from "../assets/calendar.svg";
import exit from "../assets/exite.svg";
import finance from "../assets/finance.svg";
import main from "../assets/ic_main.svg";
import map from "../assets/map.svg";
import settings from "../assets/settings.svg";
import search from "../assets/search_black.svg";
import profile_settings from "../assets/profile_settings.svg";
import widgets from "../assets/widgets.svg";
import vs_tables from "../assets/vs_tables.svg";
import polygon from "../assets/Polygon8.svg";

export default function Menu() {

  const [active, setActive] = useState("Главная");

  return (
      <div className="nav-container">
        <input className="checkbox" type="checkbox" name="" id="checkbox" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <nav className="menu">
          <span>Меню</span>
          <Link
            to={"/"}
            onClick={() => setActive("Главная")}
            className={active === "Главная" ? "active" : ""}
          >
            <img src={main} alt="" />
            Главная
          </Link>
          <Link
            to={"/address"}
            onClick={() => setActive("Поиск")}
            className={active === "Поиск" ? "active" : ""}
          >
            <img src={search} alt="" />
            Поиск адресов
          </Link>
          <Link
            to={"/"}
            onClick={() => setActive("Таблицы")}
            className={active === "Таблицы" ? "active" : ""}
          >
            <img src={vs_tables} alt="" />
            Таблицы
          </Link>
          <Link
            to={"/"}
            onClick={() => setActive("Календарь")}
            className={active === "Календарь" ? "active" : ""}
          >
            <img src={calendar} alt="" />
            Календарь
          </Link>
          <Link
            to={"/"}
            onClick={() => setActive("Карты")}
            className={active === "Карты" ? "active" : ""}
          >
            <img src={map} alt="" style={{ margin: "0 3.5px" }} />
            Карты
          </Link>
          <Link
            to={"/"}
            onClick={() => setActive("Виджеты")}
            className={active === "Виджеты" ? "active" : ""}
          >
            <img src={widgets} alt="" />
            Виджеты
          </Link>
          <details>
            <summary className={active === "Настройки" ? "active" : ""}>
              <Link to={"/"} onClick={() => setActive("Настройки")}>
                <img src={settings} alt="" />
                Настройки
              </Link>
              <img src={polygon} alt="" className="indicator" />
            </summary>
            <div className="card_body">
              <Link
                to={"/"}
                onClick={() => setActive("Профиль")}
                className={active === "Профиль" ? "active" : ""}
              >
                <img src={profile_settings} alt="" />
                Настройки профиля
              </Link>
              <Link
                to={"/"}
                onClick={() => setActive("Финансы")}
                className={active === "Финансы" ? "active" : ""}
              >
                <img src={finance} alt="" />
                Управление финансами
              </Link>
            </div>
          </details>
          <Link
            to={"/"}
            onClick={() => setActive("Выход")}
            className={active === "Выход" ? "active" : ""}
          >
            <img src={exit} alt="" />
            Выход
          </Link>
        </nav>
      </div>
  );
}

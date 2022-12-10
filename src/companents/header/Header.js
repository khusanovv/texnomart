import React from "react";
import "./Header.css";
import HeaderKatalog from "./HeaderKatalog";
import HeaderSearch from "./HeaderSearch";
// import { v4 as uuidv4 } from "uuid";

const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <ul className="header-top__list">
          <li className="list__item list__item--flex">
            <img
              src="https://texnomart.uz/_nuxt/img/header-location.e55b6c7.svg"
              alt=""
            />
            Тошкент
          </li>
          <li className="list__item">Bizning do'konlarimiz</li>
          <li className="list__item">B2B savdosi</li>
          <li className="list__item">Muddatli to'lovga sotib olish</li>
          <li className="list__item">To'lov usullari</li>
          <li className="list__item">Mahsulotlar uchun kafolat</li>
        </ul>
        <ul className="header-top__list">
          <li className="list__item">
            Aloqa markazi : <span> +99871 209 99 44</span>
          </li>
          <select name="" id="">
            <option value="">O'Z</option>
            <option value="">RU</option>
          </select>
        </ul>
      </div>
      <HeaderSearch />
      <HeaderKatalog />
    </div>
  );
};

export default Header;

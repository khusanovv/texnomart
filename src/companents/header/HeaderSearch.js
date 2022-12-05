import React from "react";
import { BsSearch } from "react-icons/bs";
import { SiHackthebox } from "react-icons/si";
import { SlBasket } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { GiScales } from "react-icons/gi";
import { useState } from "react";
// import { useRaf } from "react-use";

const HeaderSearch = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const handleFileNameChangeClick = () => {
    setLoginOpen(true); // this does not set the `modalFileNameOpen` to true.
  };

  return (
    <>
      <div className="header-login">
        <div className="login__cart"></div>
      </div>
      <div className="header-search">
        <img
          src="https://texnomart.uz/_nuxt/img/texnomart-logo.a75bf76.svg"
          alt=""
        />
        <div className="search__input">
          <div className="input__select"></div>
          <select>
            <option value="">Barcha kategoriyalar</option>
          </select>
          <input type="text" />
          <button>
            <BsSearch />
          </button>
        </div>
        <ul className="search__links">
          <li className="links__item">
            <SiHackthebox /> <br />
            Buyurtma
          </li>
          <li className="links__item">
            <BsPerson /> <br />
            Kirish onClick={handleFileNameChangeClick}
          </li>
          <li className="links__item">
            <GiScales />
            <br />
            Taqqoslash
          </li>
          <li className="links__item">
            <BsSuitHeart /> <br />
            Sevimlilar
          </li>
          <li className="links__item">
            <SlBasket />
            <br />
            Savatcha
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderSearch;

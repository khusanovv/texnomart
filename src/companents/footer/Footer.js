import React from "react";
import "./Footer.css";
import { FooterData } from "./FooterData";
// import FooterLogo from "./logo.png";
import { v4 as uuidv4, v4 } from "uuid";

const Footer = () => {
  uuidv4();
  return (
    <>
      <div className="footer">
        <div className="footer__link">
          {FooterData.map((item, index) => {
            return (
              <div className="link__list">
                
                {item.entries.map((t, index) => {
                  console.log(t);
                  return (
                    <ul key={v4}>
                      <h4 className="list__title">{t.title}</h4>
                      {t.links.map((itm, index) => {
                        return (
                          <li  className="list__link">
                            {itm.title}
                          </li>
                        );
                      })}
                    </ul>
                  );
                })}
              </div>
            );
          })}
        </div>
       
      </div>
    </>
  );
};

export default Footer;
import React from "react";
import "./Footer.css";
import { FooterData } from "./FooterData";
// import FooterLogo from "./logo.png";
import { v4 as uuidv4, v4 } from "uuid";
import { FiFacebook } from 'react-icons/fi';

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
                  // console.log(t);
                  return (
                    <ul key={v4}>
                      <h3 className="list__title">{t.title}</h3>
                      {t.links.map((itm, index) => {
                        return (
                         <>
                          <li  className="list__link">
                            {itm.title}
                          </li>
                          <div>
                            <h3 className="list__phone">
                              {itm.phone}
                            </h3>
                            <div className="footer-brend--link">
                             <p>
                              {FiFacebook}
                              </p>
                             <p>{itm.fasebook}</p>
                             <p>{itm.fasebook}</p>
                             <p>{itm.fasebook}</p>
                            </div>
                            <img src={itm.img} alt="" />
                            <p className="list__lok">
                                {itm.lok}
                            </p>
                          </div>
                         </>
                        );
                      })}
                    </ul>
                  );
                })}
               
              </div>
              
            );
          })}
        </div>
         <div className="footer-carts">
          <p>2016-2022 © texnomart.uz. 
            Barcha huquqlar himoyalangan. 
            Tovarlarning ko'rsatilgan qiymati
             va ularni sotib olish shartlari joriy
              sanaga amal qiladi</p>


          <div className="carts__img">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAYAAAA9UNxEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKXSURBVHgB7ZldSFNhGMf/5pxu6NiWS9FZXkSDUsqosQsF66JCYmAEFhFSSd0lBELdFV30cTm6qS5c3UTQbjJiRs1laR9i2lppa8XKbW3i3Kfbcl+9x2A0FtVFzxrbfvDCec77cOB/nvd5zvO+pyyVSjUDGGSjE4XNNBvdZUzwFLvYguLAyAlOoYhYhSKDB0K0unG8nrGn7TqZCKdP7MnwuXhVj5O9O4HhM0BiGTx5G/jKo6CCVLDh2SxGJ6xpWyatyRJ8z2BCp3IDWgIuxD8akfQ7SQXnxZK+wKLM67qE8tr1oCYvBHPLXn1Kh1fK60ipr4CSvClaFpsbvQNaHDs3BEpKVTrXHNi7HYFQNG3L6yWg5L8LFlTxEYsn07awkg9KiAWX/dFj8M4Y7C5f2lZtbsb+rq2ggjSHBVUVGfZyLJ7lE4nGMuxyXjkoIRXMNRo/4w9GYLY407bN7oHHt5Th01QvBSWkglsVjVn3zmqG8Nm5COe8H/3nb2fNb2tdB0pId0tc9W3vuZxRhX+HRCTEsLYfa1bXgArSCIuqq3BIrfxr/+MHO0jFcpDvh7nHa24YoLk5gkQi+UufSj4PfT3tGOjbBWpydgBgd3mh009hwmSDayGAeDyBtQ1StG1swuF9KtSKq5ELSice/xKrbR4O1lQsLIZw95EJSfZuX7AIc42GxxuCzeFBKPwND8dnWbeVwOOXH1bmRp6/BxWkgifffsGDsXcQs+obCEVW8tnyycVmUnhjceDarSfw+sO4bzTDHwgjwL7T+lEzdqgUoIJ0Sc999SLIIiivE+PppBW7OzbBNDOHRrZBCC5FUcG6KqGADzfLae7a4fahRdEAmYSuUpdyuNDhBBtRPExzgo/gx2+IQsfIRvd3aYsETCPHV5cAAAAASUVORK5CYII=" alt="" />
            <img src="https://texnomart.uz/_nuxt/img/alif.6e1bcde.png" alt="" />
            <img src="	https://texnomart.uz/_nuxt/img/intend.81957d2.png" alt="" />
            <img src="https://texnomart.uz/_nuxt/img/ofb.b3ef2cd.png" alt="" />
            <img src="https://texnomart.uz/_nuxt/img/payme.677630d.png" alt="" />
            </div>    
          </div> 
      </div>
    </>
  );
};

export default Footer;
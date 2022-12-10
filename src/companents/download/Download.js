import React from "react";
import "./Download.css";

const Download = () => {
  return (
    <div className="download container">
      <div className="download-img">
        <img
          src="https://texnomart.uz/_nuxt/img/phone-min.d3c6b0c.png"
          alt=""
        />
      </div>
      <div className="download-scan">
        <h2 className="scan__title">Ilovani yuklang</h2>
        <p className="scan__info">
          Haridlarni uydan chiqmagan holda mobil ilova orqali amalga oshiring!
        </p>
        <div className="scan_wrapper">
          <img
            src="https://texnomart.uz/_nuxt/img/quar-code.e14205a.png"
            alt=""
          />
          <p>Kamerani yo`naltiring va Texnomart ilovasini bepul yuklang</p>
        </div>
        <img
          src="https://texnomart.uz/_nuxt/img/play-market-uz.20f41ac.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Download;

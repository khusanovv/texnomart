import React from "react";
import "./TermPayment.css";

const TermPayment = () => {
  return (
    <div className="term-payment">
      <h2 className="payment__title">
        Telefonlar va maishiy texnika muddatli to'lovga
      </h2>
      <div className="payment__cart">
        <div className="cart-item">
          <div className="item-img__wrapper">
            <img
              src="https://texnomart.uz/_nuxt/img/installment-1.da8d77c.svg"
              alt=""
            />
          </div>
          <h4>Muddatli to'lovga sotib olish</h4>
          <p>
            Texnomartda maishiy texnika mahsulotlari uchun qulay onlayn to'lov
          </p>
        </div>
        <div className="cart-item">
          <div className="item-img__wrapper">
            <img
              src="https://texnomart.uz/_nuxt/img/installment-2.de0c0ae.svg"
              alt=""
            />
          </div>
          <h4>Bepul yetkazib berish</h4>
          <p>Texnomartga tovarlarni yetkazib berish shartlari</p>
        </div>
        <div className="cart-item">
          <div className="item-img__wrapper">
            <img
              src="https://texnomart.uz/_nuxt/img/installment-3.575d98a.svg"
              alt=""
            />
          </div>
          <h4>Mahsulot uchun kafolat</h4>
          <p>
            Texnomartda mahsulotning kafolati va qaytarilishi haqida hamma
            narsani bilib oling
          </p>
        </div>
        <div className="cart-item">
          <div className="item-img__wrapper">
            <img
              src="https://texnomart.uz/_nuxt/img/installment-4.4086694.svg"
              alt=""
            />
          </div>
          <h4>Bonus tizimi</h4>
          <p>Bonus tizimi</p>
        </div>
        <div className="cart-item">
          <div className="item-img__wrapper">
            <img
              src="https://texnomart.uz/_nuxt/img/installment-1.da8d77c.svg"
              alt=""
            />
          </div>
          <h4>Yordam </h4>
          <p>Kop soraladigan savollar</p>
        </div>
      </div>
    </div>
  );
};

export default TermPayment;

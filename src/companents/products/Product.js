import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
// import { useCart } form "react-use-cart";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const array = [];
export const Product = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/v2/allproducts")
      .then((response) => setAllData(response.data))

      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h3 className="product__title">Zo`r Narx</h3>
      <Swiper
        key={uuidv4()}
        slidesPerView={6}
        spaceBetween={4}
        slidesPerGroup={3}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="product"
      >
        {allData.filter((item) => {
          if (item.productCategory === "smartphones") {
            array.push(item);
          }
        })}

        {array.map((item) => {
          return (
            <>
              <SwiperSlide key={uuidv4()} className="product-cart">
                <p className="good__price">Zo'r narx</p>
                <img className="cart__img" src={item?.image[0]?.url} alt="" />
                <p className="cart__title">{item.name}</p>
                <h3> {item.price} so`m</h3>
                <div className="cart__blok">
                  <button className="cart__btn">Savatchaga</button>
                  <p>
                    <img
                      src="	https://texnomart.uz/_nuxt/img/like-default.103ba85.svg"
                      alt=""
                    />
                  </p>
                  <p>
                    <img
                      src="https://texnomart.uz/_nuxt/img/compare-default.2d0981d.svg"
                      alt=""
                    />
                  </p>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>

      <h3 className="product__title">Yangi mahsulotlar</h3>
      <Swiper
        key={uuidv4()}
        slidesPerView={6}
        spaceBetween={4}
        slidesPerGroup={3}
        // loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="product"
      >
        {allData.map((product) => (
          <>
            <SwiperSlide key={uuidv4()} className="product-cart">
              <img className="cart__img" src={product?.image[0]?.url} alt="" />
              <p className="cart__title">{product.name}</p>
              <h3> {product.price} so`m</h3>
              <div className="cart__blok">
                <button className="cart__btn">Savatchaga</button>
                <p>
                  <img
                    src="	https://texnomart.uz/_nuxt/img/like-default.103ba85.svg"
                    alt=""
                  />
                </p>
                <p>
                  <img
                    src="https://texnomart.uz/_nuxt/img/compare-default.2d0981d.svg"
                    alt=""
                  />
                </p>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  );
};

export default Product;

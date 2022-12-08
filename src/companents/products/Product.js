import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

export const Product = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/v2/allproducts")
      .then((response) => setAllData(response.data))

      .catch((err) => console.log(err));
  }, []);

  const nerArr = [];
  function phone() {
    allData.forEach((item) => {
      if (item.productCategory === "smartphones") {
        nerArr.push(item);
        console.log(nerArr);
      }
    });
  }
  phone();
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={4}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="product"
      >
        {allData.map((product) => (
          // console.log(product)
          <SwiperSlide key={uuidv4()} className="product-cart">
            {/* <img className="cart__img" src={nerArr.image[0].id} alt="" /> */}
            <p className="cart__title">{nerArr.name}</p>
            <h3> {nerArr.price} so`m</h3>
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
        ))}
      </Swiper>
    </>
  );
};

export default Product;

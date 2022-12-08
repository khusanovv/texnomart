import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

export const Product = () => {
  //   const url = `http://fakestoreapi.com/products`;
  //   const [datas, setDatas] = useState([]);
  //   useEffect(() => {
  //     fetch(url)
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         // console.log(data);
  //         // setDatas(data);
  //       });
  //   });

  const [allData, setAllData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/v2/allproducts")
      .then((response) => setAllData(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
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
          <SwiperSlide className="product-cart">
            <img className="cart__img" src={product?.image[0]?.url} alt="" />
            <h1>{product.name}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Product;

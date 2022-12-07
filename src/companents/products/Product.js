import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";

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
      <div className="product">
        {allData.map((product) => (
          <div className="product-cart">
            <img src={product?.image[0]?.url} alt="" />
            <h1>{product.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;

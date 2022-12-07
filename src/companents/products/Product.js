import React from "react";
import { useEffect, useState } from "react";

export const Product = () => {
  const url = `http://localhost:8000/v2/allproducts`;
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDatas(data);
      });
  });
  return (
    <>
      <div className="product">{}</div>
    </>
  );
};

export default Product;

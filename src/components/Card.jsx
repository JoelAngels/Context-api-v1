import React, { useState } from "react";
import { IoShirtOutline } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";

function Card({ name, price }) {
  const item = { name: "tshirt", price: 20 };
  return (
    <div className="card">
      <div className="product-box">
        <IoShirtOutline />
      </div>
      <div className="purchase">
        <h3 className="name">{name}</h3>
        <AiFillShopping style={{ marginLeft: "100px" }} />
      </div>
      <h4 className="price">${price}</h4>
    </div>
  );
}

export default Card;

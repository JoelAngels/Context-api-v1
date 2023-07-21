import React, { useState } from "react";
import { IoShirtOutline } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";
import { useContext } from "react";
import CardContext from "../CardContext";

function Card({ name, price }) {
  //

  const { addToCart } = useContext(CardContext);

  return (
    <div onClick={() => addToCart(name, price)} className="card">
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

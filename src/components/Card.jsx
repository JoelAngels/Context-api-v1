import React, { useState } from "react";
import { IoShirtOutline } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";

import { Link } from "react-router-dom";

function Card({ name, price }) {
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

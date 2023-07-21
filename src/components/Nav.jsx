import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import CardContext from "../CardContext";
import { useContext } from "react";

import React, { useState } from "react";
import { IoShirtOutline } from "react-icons/io5";

function Nav() {
  const { items } = useContext(CardContext);
  return (
    <nav>
      <Link to={"/"}>
        <h1>Wear</h1>
      </Link>

      <Link to={"/checkout"}>
        <div className="cart">
          <AiFillShopping />
          <span>{items.length}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Nav;

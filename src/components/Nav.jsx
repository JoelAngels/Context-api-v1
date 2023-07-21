import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

import React, { useState } from "react";
import { IoShirtOutline } from "react-icons/io5";

function Nav() {
  return (
    <nav>
      <Link to={"/"}>
        <h1>Wear</h1>
      </Link>

      <Link to={"/checkout"}>
        <div className="cart">
          <AiFillShopping />
        </div>
        <span>0</span>
      </Link>
    </nav>
  );
}

export default Nav;

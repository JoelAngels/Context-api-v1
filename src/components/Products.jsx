import { useState } from "react";
import Card from "./Card";

function Products() {
  const products = [
    { name: "vest", price: 50 },
    { name: "jacket", price: 70 },
    { name: "sweater", price: 60 },
    { name: "tshirt", price: 40 },
    { name: "necklace", price: 80 },
    { name: "jumper", price: 90 },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Card name={product.name} price={product.price} />
      ))}
    </div>
  );
}

export default Products;

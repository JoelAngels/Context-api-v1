import CardContext from "../CardContext";
import { useContext } from "react";

function Checkout() {
  const { items } = useContext(CardContext);
  return (
    <div>
      <h2>Checkout</h2>
      <div className="product-list">
        {items.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Checkout;

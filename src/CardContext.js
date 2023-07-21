import { createContext, useState } from "react";

const CardContext = createContext();

//this functions takes the prop called children
//means any component that we wrap around is going to have access to this value that we have below

export function CardProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (name, price) => {
    setItems((prevState) => [...prevState, { name, price }]);
  };
  return (
    <CardContext.Provider value={{ items, addToCart }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;

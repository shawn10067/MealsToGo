import React, { createContext, useContext, useState } from "react";
import { AuthenticationContext } from "../authentication/authentication.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);
  const [restuarant, setRestaurant] = useState(null);

  const add = (item, rst) => {
    if (!restuarant || restuarant.placeId !== rst.placeId) {
      setRestaurant(rst);
      setCart([item]);
    } else {
      setCart([...cart], item);
    }
  };

  const clear = () => {
    setCart([]);
    setRestaurant(null);
  };
  return (
    <CartContext.Provider
      value={{
        addToCart: add,
        clearCart: clear,
        restuarant,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useState } from "react";
import { AuthenticationContext } from "../authentication/authentication.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);
  const [restuarant, setRestaurant] = useState(null);

  const add = async (item, rst) => {
    const newRest = !restuarant || restuarant.placeId !== rst.placeId;
    let newCart = newRest ? [item] : [...cart, item];
    if (newRest) {
      setRestaurant(rst);
    }
    setCart(newCart);
    await AsyncStorage.setItem(
      `${user.uid}-checkout`,
      JSON.stringify({
        checkoutRestaurant: rst,
        checkoutCart: newCart,
      })
    );
  };

  const clear = async () => {
    setCart([]);
    setRestaurant(null);
    await AsyncStorage.setItem(
      `${user.uid}-checkout`,
      JSON.stringify({
        checkoutRestaurant: null,
        checkoutCart: [],
      })
    );
  };
  return (
    <CartContext.Provider
      value={{
        addToCart: add,
        clearCart: clear,
        restuarant,
        cart,
        setRestaurant,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

import React, { useState, useEffect, useMemo, createContext } from "react";
import { restaurantRequest, restaurantTransform } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  return (
    <RestaurantContext.Provider
      value={{
        restaurants: [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }],
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

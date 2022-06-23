import React, { useState, useEffect, createContext, useContext } from "react";
import { LocationContext } from "../location/location.context";
import { restaurantRequest, restaurantTransform } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  useEffect(() => {
    const searchTerm = location ? `${location.lat},${location.lng}` : "";
    setIsLoading(true);
    restaurantRequest(searchTerm)
      .then((data) => {
        setRestaurants(restaurantTransform(data));
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, [location]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

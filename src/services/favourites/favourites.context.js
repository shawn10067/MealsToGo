import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const { user } = useContext(AuthenticationContext);

  const saveFavourites = async (value, uid) => {
    try {
      console.log(`setting favourites with "@favourites-${uid}"`);
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      console.log(`getting favourites with "@favourites-${uid}"`);
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      console.log(value);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const remove = (restaurant) => {
    const newFvourites = favourites.filter(
      (favourite) => favourite.placeId !== restaurant.placeId
    );
    setFavourites(newFvourites);
  };

  useEffect(() => {
    loadFavourites(user.uid);
  }, [user]);

  useEffect(() => {
    console.log(favourites);
    saveFavourites(favourites, user.uid);
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

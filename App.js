import React, { useEffect, useState } from "react";
// firebase import (first incase the context and other's need it?)
import { initializeApp } from "firebase/app";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/infrastructure/theme";
import {
  useFonts as useOxygenFonts,
  Oxygen_400Regular,
  Oxygen_700Bold,
} from "@expo-google-fonts/oxygen";
import {
  useFonts as useSignikaFonts,
  SignikaNegative_300Light,
} from "@expo-google-fonts/signika-negative";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import Navigation from "./src/infrastructure/navigation/";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

// firebase config

const firebaseConfig = {
  apiKey: "AIzaSyA67trxBBjOCjF-LEC9BjBCdx3C554qgJk",
  authDomain: "mealstogo-be58e.firebaseapp.com",
  projectId: "mealstogo-be58e",
  storageBucket: "mealstogo-be58e.appspot.com",
  messagingSenderId: "484801297118",
  appId: "1:484801297118:web:c4c927481e5816535de04f",
};

initializeApp(firebaseConfig);

// main app config

export default function App() {
  //firebase auth effect and state holder
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {}, []);

  const [oxygenFonts] = useOxygenFonts({
    Oxygen_400Regular,
    Oxygen_700Bold,
  });

  const [signikaFonts] = useSignikaFonts({
    SignikaNegative_300Light,
  });

  if (!oxygenFonts || !signikaFonts) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <FavouritesContextProvider>
              <Navigation />
              <ExpoStatusBar style="auto" />
            </FavouritesContextProvider>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
}

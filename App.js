import React, { useEffect, useState } from "react";
// firebase import (first incase the context and other's need it?)
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/infrastructure/theme";
import { getApps, initializeApp } from "firebase/app";
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
import { loginRequest } from "./src/services/authentication/authentication.service";
import { Text } from "react-native-paper";
import { AuthenticationProvider } from "./src/services/authentication/authentication.context";

// firebase confit and setup
const firebaseConfig = {
  apiKey: "AIzaSyA67trxBBjOCjF-LEC9BjBCdx3C554qgJk",
  authDomain: "mealstogo-be58e.firebaseapp.com",
  projectId: "mealstogo-be58e",
  storageBucket: "mealstogo-be58e.appspot.com",
  messagingSenderId: "484801297118",
  appId: "1:484801297118:web:c4c927481e5816535de04f",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

// main app config
export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    loginRequest("sheeen200@gmail.com", "Wowow123").then((user) => {
      setAuthenticated(true);
    });
  }, []);

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

  if (!authenticated) {
    return <Text>Get authenticated!</Text>;
  }
  return (
    <>
      <AuthenticationProvider>
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
      </AuthenticationProvider>
    </>
  );
}

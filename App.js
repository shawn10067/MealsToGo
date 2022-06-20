import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantScreen from "./src/features/restaurants/screens/restaurant-screen";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/infrastructure";
import {
  useFonts as useOxygenFonts,
  Oxygen_400Regular,
  Oxygen_700Bold,
} from "@expo-google-fonts/oxygen";

import {
  useFonts as useSignikaFonts,
  SignikaNegative_300Light,
} from "@expo-google-fonts/signika-negative";

export default function App() {
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
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

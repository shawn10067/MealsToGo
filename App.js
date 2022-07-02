import React from "react";
// firebase import (first incase the context and other's need it?)
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

import Navigation from "./src/infrastructure/navigation/";
import { AuthenticationProvider } from "./src/services/authentication/authentication.context";
import { getApps, initializeApp } from "firebase/app";

// firebase config and setup
const firebaseConfig = {
  apiKey: "AIzaSyA67trxBBjOCjF-LEC9BjBCdx3C554qgJk",
  authDomain: "mealstogo-be58e.firebaseapp.com",
  projectId: "mealstogo-be58e",
  storageBucket: "mealstogo-be58e.appspot.com",
  messagingSenderId: "484801297118",
  appId: "1:484801297118:web:c4c927481e5816535de04f",
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

// main app config
export default function App() {
  // TODO: Install firebase-tools on mac and run firebase-login

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
      <AuthenticationProvider>
        <ThemeProvider theme={theme}>
          <Navigation />
          <ExpoStatusBar style="inverted" animated={true} />
        </ThemeProvider>
      </AuthenticationProvider>
    </>
  );
}

import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantScreen from "./src/features/restaurants/screens/restaurant-screen";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

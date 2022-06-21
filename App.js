import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantScreenList from "./src/features/restaurants/screens/restaurant-screen";
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
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import SafeAreaView from "./src/components/safeAreaView";

function SettingsScreen() {
  return (
    <SafeAreaView>
      <Text>Settings!</Text>
    </SafeAreaView>
  );
}
function MapScreen() {
  return (
    <SafeAreaView>
      <Text>Map!</Text>
    </SafeAreaView>
  );
}

const RestaurantScreen = () => {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantScreenList />
    </ThemeProvider>
  );
};

const TAB_ICON = {
  Restaurants: "fast-food-outline",
  Map: "map",
  Settings: "ios-settings-outline",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

const Tab = createBottomTabNavigator();

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
      <NavigationContainer>
        <Tab.Navigator screenOptions={createScreenOptions}>
          <Tab.Screen name="Restaurants" component={RestaurantScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <ExpoStatusBar style="auto" />
    </>
  );
}

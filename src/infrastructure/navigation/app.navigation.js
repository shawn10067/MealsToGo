import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SafeAreaView from "../../components/safeAreaView";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import RestaurantsNavigator from "./restaurant.navigator";

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
    tabBarStyle: {
      flex: 0.087,
    },
    tabBarItemStyle: {
      padding: 6,
    },
    headerShown: false,
  };
};

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

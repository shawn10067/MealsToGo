import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import RestaurantsNavigator from "./restaurant.navigator";
import MapView from "../../features/map/screens/map.screen";
import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import SettingsScreen from "../../features/settings/screens/settings.screens";

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
    <LocationContextProvider>
      <RestaurantContextProvider>
        <FavouritesContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapView} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </FavouritesContextProvider>
      </RestaurantContextProvider>
    </LocationContextProvider>
  );
};

export default AppNavigator;

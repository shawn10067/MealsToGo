import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import RestaurantsNavigator from "./restaurant.navigator";
import MapView from "../../features/map/screens/map.screen";
import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import SettingsNavigator from "./settings.navigator";
import { ProfilePictureContextProvider } from "../../services/profilePicture/profilePicture.context";
import { CartContextProvider } from "../../services/cart/cart.context";
import CheckoutNavigator from "./checkout.navigator";

const TAB_ICON = {
  Restaurants: "fast-food-outline",
  Map: "map",
  Settings: "ios-settings-outline",
  Checkout: "md-cart",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "violet",
    tabBarInactiveTintColor: "black",
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
          <ProfilePictureContextProvider>
            <CartContextProvider>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen
                  name="Restaurants"
                  component={RestaurantsNavigator}
                />
                <Tab.Screen name="Map" component={MapView} />
                <Tab.Screen name="Checkout" component={CheckoutNavigator} />
                <Tab.Screen name="Settings" component={SettingsNavigator} />
              </Tab.Navigator>
            </CartContextProvider>
          </ProfilePictureContextProvider>
        </FavouritesContextProvider>
      </RestaurantContextProvider>
    </LocationContextProvider>
  );
};

export default AppNavigator;

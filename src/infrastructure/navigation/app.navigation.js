import React, { useContext } from "react";
import SafeAreaView from "../../components/safeAreaView";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import RestaurantsNavigator from "./restaurant.navigator";
import MapView from "../../features/map/screens/map.screen";
import { Button } from "react-native-paper";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

function SettingsScreen() {
  const { logout } = useContext(AuthenticationContext);
  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
      <Button onPress={logout}>Logout</Button>
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

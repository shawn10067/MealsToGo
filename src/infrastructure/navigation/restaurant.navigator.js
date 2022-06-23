import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantScreenList from "../../features/restaurants/screens/restaurant-screen";
import SafeAreaView from "../../components/safeAreaView";
import RestaurantInfoCard from "../../features/restaurants/components/restaurant-info-card.component";

const RestaurantStack = createStackNavigator();

const RestaurantScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <RestaurantScreenList navigation={navigation} />
    </SafeAreaView>
  );
};

const Restaurant = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <RestaurantInfoCard navigation={navigation} route={route} />
    </SafeAreaView>
  );
};

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        component={RestaurantScreen}
        name="Restaurant Screen"
      />
      <RestaurantStack.Screen
        component={Restaurant}
        name="Restaurant Details"
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;

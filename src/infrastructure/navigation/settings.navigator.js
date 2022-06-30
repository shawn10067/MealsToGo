import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import SettingsScreen from "../../features/settings/screens/settings.screens";
import FavouritesScreen from "../../features/settings/screens/favourites.screens";
import CameraScreen from "../../features/settings/screens/camera.screen";

const SettingsStack = createStackNavigator();

const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings Home"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Camera"
        component={CameraScreen}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;

import React from "react";
import { Text } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../../features/account/screens/account.screen";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={() => <AccountScreen />} />
      <Stack.Screen name="Login" component={() => <Text>Login Screen</Text>} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;

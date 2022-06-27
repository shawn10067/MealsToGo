import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import AccountNavigator from "./account.navigation";
import AppNavigator from "./app.navigation";
import { NavigationContainer } from "@react-navigation/native";

const Navigation = () => {
  const { user } = useContext(AuthenticationContext);
  const UserNavigation = user ? <AppNavigator /> : <AccountNavigator />;
  return <NavigationContainer>{UserNavigation}</NavigationContainer>;
};

export default Navigation;

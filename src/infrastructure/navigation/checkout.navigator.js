import React from "react";
import CheckoutScreen from "../../features/checkout/screens/checkout.screen";

import { createStackNavigator } from "@react-navigation/stack";
import CheckoutError from "../../features/checkout/screens/checkout-error.screen";
import CheckoutSuccess from "../../features/checkout/screens/checkout-success.screen";

const CheckoutStack = createStackNavigator();

export const CheckoutNavigator = ({ navigator }) => {
  return (
    <CheckoutStack.Navigator headerMode="none">
      <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} />
      <CheckoutStack.Screen name="Checkout Error" component={CheckoutError} />
      <CheckoutStack.Screen
        name="Checkout Success"
        component={CheckoutSuccess}
      />
    </CheckoutStack.Navigator>
  );
};

export default CheckoutNavigator;

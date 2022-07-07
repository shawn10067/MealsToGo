import React from "react";
import { Text } from "react-native-paper";
import SafeAreaView from "../../../components/safeAreaView";
import {
  CartIcon,
  CartIconContainer,
  CartEmptyText,
} from "../components/checkout.styles";

const CheckoutSuccess = () => {
  return (
    <SafeAreaView>
      <CartIconContainer>
        <CartIcon icon="cart-check" />
        <CartEmptyText>Success!</CartEmptyText>
      </CartIconContainer>
    </SafeAreaView>
  );
};

export default CheckoutSuccess;

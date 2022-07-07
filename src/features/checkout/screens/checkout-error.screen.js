import React from "react";
import SafeAreaView from "../../../components/safeAreaView";
import {
  CartIcon,
  CartIconContainer,
  CartEmptyText,
} from "../components/checkout.styles";

const CheckoutError = ({ route }) => {
  return (
    <SafeAreaView>
      <CartIconContainer>
        <CartIcon icon="cart-remove" />
        <CartEmptyText>Error: {route.params.error.message}</CartEmptyText>
      </CartIconContainer>
    </SafeAreaView>
  );
};

export default CheckoutError;

import React from "react";
import SafeAreaView from "../../../components/safeAreaView";
import {
  CartIcon,
  CartIconContainer,
  CartEmptyText,
} from "../components/checkout.styles";

const CheckoutError = () => {
  return (
    <SafeAreaView>
      <CartIconContainer>
        <CartIcon icon="cart-remove" />
        <CartEmptyText>Error!</CartEmptyText>
      </CartIconContainer>
    </SafeAreaView>
  );
};

export default CheckoutError;

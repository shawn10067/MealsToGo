import React, { useContext } from "react";
import { Text } from "react-native-paper";
import styled from "styled-components/native";
import SafeAreaView from "../../../components/safeAreaView";
import { CartContext } from "../../../services/cart/cart.context";
import CreditCardInput from "../components/credit-card.component";

const CartTextView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CheckoutScreen = () => {
  const { cart, restuaurant } = useContext(CartContext);
  return (
    <SafeAreaView>
      <CartTextView>
        <Text>
          {JSON.stringify(cart)} and {JSON.stringify(restuaurant)}
        </Text>
        <CreditCardInput />
      </CartTextView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

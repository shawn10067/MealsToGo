import React from "react";
import { Text } from "react-native-paper";
import styled from "styled-components/native";
import SafeAreaView from "../../../components/safeAreaView";
import CreditCardInput from "../components/credit-card.component";

const CartTextView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CheckoutScreen = () => {
  return (
    <SafeAreaView>
      <CartTextView>
        <CreditCardInput />
      </CartTextView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

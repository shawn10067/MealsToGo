import styled from "styled-components/native";
import { Avatar, Button, List, TextInput } from "react-native-paper";
import { ScrollView } from "react-native";

export const CartTextView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CartIconContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
  color: "white",
})`
  background-color: violet;
`;

export const CartEmptyText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 24px;
  margin: ${({ theme }) => theme.space.lg};
`;

export const TotalText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;
  margin: ${({ theme }) => theme.space.sm};
  margin-left: ${({ theme }) => theme.space.lg};
`;

export const CartView = styled.View`
  flex: 1;
`;

export const CartList = styled(List.Accordion)`
  width: 100%;
`;

export const CartItemScroll = styled(ScrollView)`
  width: 100%;
  margin-bottom: 10px;
`;

export const NameView = styled.View`
  flex-direction: row;
  padding: 10px;
`;

export const NameTextView = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: center;
`;

export const NameInput = styled(TextInput)`
  flex: 0.8;
  height: 40px;
  width: 40%;
  margin-right: 20px;
`;

export const NameText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;
`;

export const PayButton = styled(Button).attrs({
  color: "black",
})`
  width: 80%;
  height: 50px;
  margin: 8px;
  background-color: turquoise;
  justify-content: center;
  border-radius: 20px;
`;

export const ClearButton = styled(Button).attrs({
  color: "white",
})`
  width: 80%;
  height: 50px;
  margin: 8px;
  background-color: blueviolet;
  justify-content: center;
  border-radius: 20px;
`;

export const CreditCardView = styled.View`
  justify-content: center;
  align-items: center;
`;

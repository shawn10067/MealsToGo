import styled from "styled-components/native";
import { Avatar, List } from "react-native-paper";
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
`;

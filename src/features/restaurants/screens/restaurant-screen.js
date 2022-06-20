import React from "react";
import { SafeAreaView as SafeArea, StatusBar, Platform } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";
const SafeAreaView = styled(SafeArea)`
  flex: 1;
  ${StatusBar.currentHeight &&
  `margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;`}
`;

const ListView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colours.bg.primary};
  padding: ${({ theme }) => theme.space.lg};
`;

const SearchView = styled.View`
  background-color: ${({ theme }) => theme.colours.bg.secondary};
  padding: ${({ theme }) => theme.space.lg};
`;

const RestaurantScreen = () => {
  return (
    <SafeAreaView>
      <SearchView>
        <Searchbar placeholder="Search" />
      </SearchView>
      <ListView>
        <RestaurantInfoCard />
      </ListView>
    </SafeAreaView>
  );
};

export default RestaurantScreen;

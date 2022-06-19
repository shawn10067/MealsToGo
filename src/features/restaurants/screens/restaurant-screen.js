import React from "react";
import {
  StyleSheet,
  SafeAreaView as SafeArea,
  StatusBar,
  Platform,
} from "react-native";
import sizing from "../../../utils/sizing";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeAreaView = styled(SafeArea)`
  flex: 1;
  ${StatusBar.currentHeight &&
  `margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;`}
`;

const ListView = styled.View`
  flex: 1;
  background-color: lightblue;
  padding: ${sizing.md}px;
`;

const SearchView = styled.View`
  background-color: "lightpink";
  padding: ${sizing.md}px;
`;

const isAndroid = Platform.OS === "android";
const RestaurantScreen = () => {
  return (
    <SafeAreaView>
      <SearchView>
        <Searchbar placeholder="Search"></Searchbar>
      </SearchView>
      <ListView>
        <RestaurantInfoCard />
      </ListView>
    </SafeAreaView>
  );
};

export default RestaurantScreen;

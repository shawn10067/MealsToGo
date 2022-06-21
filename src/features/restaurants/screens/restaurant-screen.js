import React from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import SafeAreaView from "../../../components/safeAreaView";

const SearchView = styled.View`
  background-color: ${({ theme }) => theme.colours.bg.secondary};
  padding: ${({ theme }) => theme.space.lg};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantScreen = () => {
  return (
    <SafeAreaView>
      <SearchView>
        <Searchbar placeholder="Search" />
      </SearchView>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

export default RestaurantScreen;

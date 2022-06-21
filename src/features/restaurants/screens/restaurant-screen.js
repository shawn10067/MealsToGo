import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import SafeAreaView from "../../../components/safeAreaView";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

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
  const { restaurants } = useContext(RestaurantContext);
  return (
    <SafeAreaView>
      <SearchView>
        <Searchbar placeholder="Search" />
      </SearchView>
      <RestaurantList
        data={restaurants}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

export default RestaurantScreen;

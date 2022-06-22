import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
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

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const RestaurantScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  if (isLoading) {
    return (
      <LoadingContainer>
        <ActivityIndicator animating={true} color="blue" size={50} />
      </LoadingContainer>
    );
  }
  return (
    <>
      <SearchView>
        <Searchbar placeholder="Search" />
      </SearchView>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};

export default RestaurantScreen;

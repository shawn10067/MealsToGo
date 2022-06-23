import React, { useContext } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";

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

const RestaurantScreen = ({ navigation }) => {
  // eslint-disable-next-line no-unused-vars
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  const { search } = useContext(LocationContext);

  return (
    <>
      <SearchView>
        <Searchbar placeholder="Search" onChangeText={search} />
      </SearchView>
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator animating={true} color="blue" size={50} />
        </LoadingContainer>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <RestaurantInfoCard restaurant={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </>
  );
};

export default RestaurantScreen;

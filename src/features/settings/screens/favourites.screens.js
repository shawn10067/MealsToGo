import React, { useContext } from "react";
import { Text } from "react-native-paper";
import styled from "styled-components";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card.component";
import { RestaurantList } from "../../restaurants/screens/restaurant-screen";

const NoFavouritesView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <RestaurantList
      data={favourites}
      renderItem={({ item }) => (
        <RestaurantInfoCard restaurant={item} navigation={navigation} />
      )}
      keyExtractor={(item) => item.name}
    />
  ) : (
    <NoFavouritesView>
      <Text>No favourites</Text>
    </NoFavouritesView>
  );
};

export default FavouritesScreen;

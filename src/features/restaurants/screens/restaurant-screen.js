import React, { useContext, useState } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import SearchBar from "../components/search.bar";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import FavouritesBar from "../../../components/favourites/favourites.bar.js";
import { FadeInView } from "../../../components/animations/fade.animation";

export const RestaurantList = styled(FlatList).attrs({
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
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      <SearchBar
        onFavouritesToggled={() => setIsToggled(!isToggled)}
        favouritesToggled={isToggled}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator animating={true} color="blue" size={50} />
        </LoadingContainer>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <FadeInView>
              <RestaurantInfoCard restaurant={item} navigation={navigation} />
            </FadeInView>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </>
  );
};

export default RestaurantScreen;

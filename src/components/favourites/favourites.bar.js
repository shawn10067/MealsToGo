import React from "react";
import { Text } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import CompactRestaurantView from "../restaurant-compact.component";

const FavouritesWrapper = styled.View`
  padding: 15px;
`;

const CompactWrapper = styled.View`
  margin: 5px;
`;

const FavouritesBar = ({ favourites, onNavigate }) => {
  if (favourites.length === 0) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Text>Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((favourite) => (
          <CompactWrapper key={favourite.placeId}>
            <TouchableOpacity
              onPress={() =>
                onNavigate("Restaurant Details", {
                  restaurant: favourite,
                })
              }
            >
              <CompactRestaurantView restaurant={favourite} />
            </TouchableOpacity>
          </CompactWrapper>
        ))}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouritesBar;

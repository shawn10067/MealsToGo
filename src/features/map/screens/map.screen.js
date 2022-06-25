import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import ReactNativeMap, { Marker, Callout } from "react-native-maps";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import CompactRestaurantView from "../../../components/restaurant-compact.component";
import SearchBar from "../components/search.bar";

const Map = styled(ReactNativeMap)`
  height: 100%;
  width: 100%;
`;

const MapView = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantContext);
  const [latDelta, setLatDelta] = useState(0);
  const { viewport } = location;

  useEffect(() => {
    const northEastDelta = viewport.northeast.lat;
    const southWestDelta = viewport.southwest.lat;

    setLatDelta(northEastDelta - southWestDelta);
  }, [location, viewport]);

  const initLocation = {
    latitude: location.lat,
    longitude: location.lng,
    latitudeDelta: latDelta,
    longitudeDelta: 0.02,
  };

  return (
    <>
      <SearchBar />
      <Map region={initLocation}>
        {restaurants.map((restaurant, index) => {
          const restLocation = {
            latitude: restaurant.geometry.location.lat,
            longitude: restaurant.geometry.location.lng,
          };
          return (
            <Marker coordinate={restLocation} key={index}>
              <Callout
                onPress={() =>
                  navigation.navigate("Restaurant Details", { restaurant })
                }
              >
                <CompactRestaurantView
                  restaurant={restaurant}
                  navigation={navigation}
                />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};

export default MapView;

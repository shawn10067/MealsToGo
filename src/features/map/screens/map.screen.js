import React, { useContext, useEffect, useState } from "react";
import ReactNativeMap, { Marker } from "react-native-maps";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import SearchBar from "../components/search.bar";

const Map = styled(ReactNativeMap)`
  height: 100%;
  width: 100%;
`;

const MapView = () => {
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
          return <Marker coordinate={restLocation} key={index} />;
        })}
      </Map>
    </>
  );
};

export default MapView;

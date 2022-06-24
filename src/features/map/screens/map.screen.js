import React from "react";
import SafeAreaView from "../../../components/safeAreaView";
import ReactNativeMap from "react-native-maps";
import styled from "styled-components/native";
import SearchBar from "../components/search.bar";

const Map = styled(ReactNativeMap)`
  height: 100%;
`;

const MapView = () => {
  return (
    <Map>
      <SafeAreaView>
        <SearchBar />
      </SafeAreaView>
    </Map>
  );
};

export default MapView;

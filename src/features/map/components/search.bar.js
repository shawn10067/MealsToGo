import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchView = styled.View`
  padding: ${({ theme }) => theme.space.lg};
  position: absolute;
  z-index: 999;
  top: 5%;
  width: 100%;
`;

const SearchBar = () => {
  const { search, keyword } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState(keyword);
  useEffect(() => {
    setSearchTerm(keyword);
  }, [keyword]);
  return (
    <SearchView>
      <Searchbar
        placeholder="Search"
        onChangeText={(text) => setSearchTerm(text)}
        onEndEditing={() => search(searchTerm)}
        value={searchTerm}
        icon="map"
      />
    </SearchView>
  );
};

export default SearchBar;

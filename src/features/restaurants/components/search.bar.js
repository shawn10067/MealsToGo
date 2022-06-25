import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchView = styled.View`
  background-color: ${({ theme }) => theme.colours.bg.secondary};
  padding: ${({ theme }) => theme.space.lg};
`;

const SearchBar = ({ onFavouritesToggled, favouritesToggled }) => {
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
        icon="heart"
        onIconPress={onFavouritesToggled}
        iconColor={favouritesToggled ? "red" : null}
      />
    </SearchView>
  );
};

export default SearchBar;

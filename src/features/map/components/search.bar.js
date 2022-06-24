import React from "react";
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
  const { search } = useContext(LocationContext);
  return (
    <SearchView>
      <Searchbar placeholder="Search" onChangeText={search} />
    </SearchView>
  );
};

export default SearchBar;

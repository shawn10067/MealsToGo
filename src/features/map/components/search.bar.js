import React from "react";
import { useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchView = styled.View`
  padding: ${({ theme }) => theme.space.lg};
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

import React from "react";
import { Text } from "react-native";
import { Card as PaperCard } from "react-native-paper";
import styled from "styled-components/native";
import sizing from "../../../utils/sizing";

const Card = styled(PaperCard)`
  padding: ${sizing.md}px;
  background-color: white;
  border-radius: ${sizing.sm}px;
`;

const CardText = styled(Text)`
  padding-top: ${sizing.md}px;
  font-weight: bold;
  color: black;
`;

const Cover = styled(PaperCard.Cover)`
  width: 100%;
  height: 160px;
  border-top-left-radius: ${sizing.md}px;
  border-top-right-radius: ${sizing.md}px;
  border-bottom-left-radius: ${sizing.md}px;
  border-bottom-right-radius: ${sizing.md}px;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "osmows",
    icon,
    photos = [
      "https://viewthevibe.com/wp-content/uploads/2020/11/20286866_10154670277830846_8428188245732336832_o.jpg",
    ],
    address,
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5}>
      <Cover source={{ uri: photos[0] }} blurRadius={0.2}></Cover>
      <CardText>{name}</CardText>
    </Card>
  );
};

export default RestaurantInfoCard;

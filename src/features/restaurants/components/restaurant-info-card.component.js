import React from "react";
import { Text, View, Image } from "react-native";
import { Card as PaperCard } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const StarSvg = () => {
  return <SvgXml xml={star} width={20} height={20} />;
};

const OpenSvg = ({ isOpen }) => {
  if (isOpen) {
    return <SvgXml xml={open} width={25} height={25} />;
  } else {
    return null;
  }
};

const Card = styled(PaperCard)`
  padding: ${({ theme }) => theme.space.lg};
  background-color: white;
  border-radius: ${({ theme }) => theme.sizes.sm};
`;

const CardInfoContainer = styled.View`
  padding-top: ${({ theme }) => theme.space.lg};
`;

const CardStar = styled.View`
  flex-direction: row;
  padding-top: ${({ theme }) => theme.space.md};
  padding-bottom: ${({ theme }) => theme.space.md};
`;

const CardText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.body};
`;

const CardIconInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: ${({ theme }) => theme.space.md};
`;

const CardAddress = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

const Cover = styled(PaperCard.Cover)`
  width: 100%;
  height: 160px;
  border-top-left-radius: ${({ theme }) => theme.sizes.sm};
  border-top-right-radius: ${({ theme }) => theme.sizes.sm};
  border-bottom-left-radius: ${({ theme }) => theme.sizes.sm};
  border-bottom-right-radius: ${({ theme }) => theme.sizes.sm};
`;

const CardIconStatus = styled.View`
  flex-grow: 1;
  flex-direction: row;
  align-content: flex-end;
  justify-content: flex-end;
`;
const CardStars = styled.View`
  flex-grow: 0;
  flex-direction: row;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Osmows",
    icon = "https://cdn-icons-png.flaticon.com/512/3296/3296455.png",
    photos = [
      "https://viewthevibe.com/wp-content/uploads/2020/11/20286866_10154670277830846_8428188245732336832_o.jpg",
    ],
    address = "Sandalwood & Kennedy",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  let starArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card elevation={5}>
      <Cover source={{ uri: photos[0] }} blurRadius={0.2} />
      <CardInfoContainer>
        <CardText>{name}</CardText>
        <CardIconInfo>
          <CardStars>
            {starArray.map((_, index) => (
              <StarSvg key={index} />
            ))}
          </CardStars>
          <CardIconStatus>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <OpenSvg isOpen={isOpenNow} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </CardIconStatus>
        </CardIconInfo>
        <CardAddress>{address}</CardAddress>
      </CardInfoContainer>
    </Card>
  );
};

export default RestaurantInfoCard;

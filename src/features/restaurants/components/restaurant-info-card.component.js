import React from "react";
import { TouchableOpacity } from "react-native";
import Spacer from "../../../components/spacer/spacer.component";
import Text from "../../../components/typography/text.component";
import {
  Card,
  Cover,
  CardIconInfo,
  CardInfoContainer,
  CardStars,
  StarSvg,
  CardIconStatus,
  OpenSvg,
  Icon,
} from "./restaurant-info-card.styles";

const RestaurantInfoCard = ({ restaurant = {}, navigation, route }) => {
  const {
    name = "Osmows",
    icon = "https://cdn-icons-png.flaticon.com/512/3296/3296455.png",
    photos = [
      "https://viewthevibe.com/wp-content/uploads/2020/11/20286866_10154670277830846_8428188245732336832_o.jpg",
    ],
    address = "170 Sandalwood Pkwy E, Brampton, ON L6Z 1Y5",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = route && route.params && route.params.restaurant
    ? route.params.restaurant
    : restaurant;

  let starArray = Array.from(new Array(Math.floor(rating)));

  return (
    <TouchableOpacity
      onPress={() =>
        navigation && !route
          ? navigation.navigate("Restaurant Details", {
              restaurant,
              pressed: true,
            })
          : null
      }
    >
      <Card elevation={5}>
        <Cover source={{ uri: photos[0] }} blurRadius={0.2} />
        <CardInfoContainer>
          <Text variant="label">{name}</Text>
          <CardIconInfo>
            <CardStars>
              {starArray.map((_, index) => (
                <StarSvg key={`star-${placeId}-${index}`} />
              ))}
            </CardStars>
            <CardIconStatus>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="small" />
              <OpenSvg isOpen={isOpenNow} />
              <Spacer position="left" size="small" />
              <Icon uri={icon} />
            </CardIconStatus>
          </CardIconInfo>
          <Text variant="body">{address}</Text>
        </CardInfoContainer>
      </Card>
    </TouchableOpacity>
  );
};

export default RestaurantInfoCard;

import React from "react";
import { Image as ReactImage } from "react-native";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";

const CompactView = styled.View`
  justify-content: center;
  align-items: center;
  width: 150px;
`;

const CompactText = styled.Text`
  width: 100%;
  text-align: center;
  padding-top: ${({ theme }) => theme.sizes.sm};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-family: ${({ theme }) => theme.fonts.body};
`;

const CompactImage = styled(ReactImage)`
  border-radius: ${({ theme }) => theme.sizes.sm};
  height: 100px;
  width: 100%;
`;

const CompactWebView = styled(WebView)`
  border-radius: ${({ theme }) => theme.sizes.sm};
  height: 100px;
  width: 100%;
`;

const isAndroid = Platform.OS === "android";
const CompactRestaurantView = ({ restaurant, navigation }) => {
  const Image = isAndroid ? CompactWebView : CompactImage;
  return (
    <CompactView>
      <Image source={{ uri: restaurant.photos[0] }} />
      <CompactText>{restaurant.name}</CompactText>
    </CompactView>
  );
};

export default CompactRestaurantView;

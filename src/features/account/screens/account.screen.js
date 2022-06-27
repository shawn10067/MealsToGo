import React from "react";
import { ImageBackground, Text } from "react-native";
import styled from "styled-components/native";

const image = {
  uri: "https://s2.best-wallpaper.net/wallpaper/iphone/1708/Cutting-board-fork-spoon-mint-leaves_iphone_1080x1920.jpg",
};

const ScreenContainer = styled.View`
  flex: 1;
`;

const BackgroundImage = styled(ImageBackground)`
  flex: 1;
`;

const OptionsView = styled.View``;

const AccountScreen = () => {
  return (
    <ScreenContainer>
      <BackgroundImage source={image}>
        <Text>Yur</Text>
      </BackgroundImage>
    </ScreenContainer>
  );
};

export default AccountScreen;

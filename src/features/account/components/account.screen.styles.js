import { ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";

export const bgimage = {
  uri: "https://s2.best-wallpaper.net/wallpaper/iphone/1708/Cutting-board-fork-spoon-mint-leaves_iphone_1080x1920.jpg",
};

export const ScreenContainer = styled.View`
  flex: 1;
`;

export const BackgroundOverlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled(ImageBackground).attrs({
  source: bgimage,
})`
  flex: 1;
`;

export const OptionsView = styled.View`
  height: 25%;
  width: 85%;
  background-color: rgba(255, 235, 205, 0.958);
  border-radius: 10px;
  margin-top: 100px;
  align-items: center;
  justify-content: space-evenly;
`;

export const AuthButton = styled(Button).attrs({
  mode: "contained",
  textColor: "white",
})`
  width: 80%;
  height: 60px;
  border-radius: 10px;
  justify-content: center;
  text-align: center;
  background-color: black;
`;

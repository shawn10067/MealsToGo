import { ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";

export const bgimage = require("../../../../assets/cuttingBoard.jpg");

export const ScreenContainer = styled.View`
  flex: 1;
`;

export const LottieContainer = styled.View`
  width: 100%;
  flex: 2;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const AnimationConatiner = styled.View`
  padding-top: 40px;
`;

export const BackgroundOverlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ContentContainer = styled.View`
  flex: 3;
  justify-content: flex-start;
  align-items: center;
`;

export const BackgroundImage = styled(ImageBackground).attrs({
  source: bgimage,
})`
  flex: 1;
`;

export const OptionsView = styled.View`
  margin-top: 60px;
  height: 45%;
  width: 85%;
  background-color: rgba(245, 245, 245, 0.9);
  border-radius: 10px;
  align-items: center;
  justify-content: space-evenly;
`;

export const AuthButton = styled(Button).attrs({
  mode: "contained",
  textColor: "white",
})`
  width: 80%;
  border-radius: 10px;
  justify-content: center;
  text-align: center;
  background-color: black;
  padding-top: 15px;
  padding-bottom: 15px;
`;

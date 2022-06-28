import React from "react";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";

export const LoginOptionsView = styled.View`
  padding-top: 35px;
  padding-bottom: 35px;
  width: 85%;
  background-color: rgba(255, 235, 205, 0.958);
  border-radius: 10px;
  align-items: center;
  justify-content: space-evenly;
`;

export const LoginField = styled(TextInput).attrs({
  selectionColor: "white",
  mode: "flat",
  theme: {
    colors: {
      secondary: "white",
      primary: "white",
      text: "white",
      background: "black",
      placeholder: "white",
    },
  },
  placeholderTextColor: "white",
  underlineColor: "white",
})`
  width: 80%;
  height: 60px;
  margin: 10px;
  margin-top: 3px;
  color: white;
`;

export const LoginFieldView = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 25px;
`;

export const ErrorView = styled.View`
  width: 80%;
  margin-bottom: 15px;
`;
export const ErrorText = styled.Text`
  color: #d9381e;
  font-weight: bold;
`;

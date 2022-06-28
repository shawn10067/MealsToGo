import React, { useContext, useState } from "react";
import { View } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AuthButton,
  BackgroundImage,
  ContentContainer,
  ScreenContainer,
} from "../components/account.screen.styles";
import {
  LoginField,
  LoginFieldView,
  LoginOptionsView,
} from "../components/login.screen.styles";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useContext(AuthenticationContext);
  return (
    <ScreenContainer>
      <BackgroundImage>
        <ContentContainer>
          <LoginOptionsView>
            <LoginFieldView>
              <LoginField
                label="Email"
                placeholder="Email"
                onChangeText={(val) => setUsername(val)}
                value={username}
              />
              <LoginField
                secureTextEntry={true}
                label={"Password"}
                placeholder="Password"
                onChangeText={(val) => setPassword(val)}
                value={password}
              />
            </LoginFieldView>
            <AuthButton
              icon="lock"
              textColor="white"
              onPress={() => onLogin(username, password)}
            >
              Login
            </AuthButton>
          </LoginOptionsView>
        </ContentContainer>
      </BackgroundImage>
    </ScreenContainer>
  );
};

export default LoginScreen;

import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AuthButton,
  BackgroundImage,
  ScreenContainer,
} from "../components/account.screen.styles";
import {
  ErrorText,
  ErrorView,
  LoginField,
  LoginFieldView,
  LoginOptionsView,
  LoginContentContainer,
} from "../components/login.screen.styles";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, loading } = useContext(AuthenticationContext);
  return (
    <ScreenContainer>
      <BackgroundImage>
        <LoginContentContainer>
          <LoginOptionsView>
            <LoginFieldView>
              <LoginField
                label="Email"
                placeholder="Email"
                onChangeText={(val) => setUsername(val)}
                value={username}
                keyboardType="email-address"
                autoCapitalize="none"
                textContentType="emailAddress"
              />
              <LoginField
                secureTextEntry={true}
                label={"Password"}
                placeholder="Password"
                onChangeText={(val) => setPassword(val)}
                value={password}
                autoCapitalize="none"
                textContentType="password"
              />

              {error && (
                <ErrorView>
                  <ErrorText>{error.toString()}</ErrorText>
                </ErrorView>
              )}
            </LoginFieldView>
            {loading ? (
              <ActivityIndicator color="black" />
            ) : (
              <AuthButton
                icon="lock"
                textColor="white"
                onPress={() => onLogin(username, password)}
              >
                Login
              </AuthButton>
            )}
          </LoginOptionsView>
        </LoginContentContainer>
      </BackgroundImage>
    </ScreenContainer>
  );
};

export default LoginScreen;

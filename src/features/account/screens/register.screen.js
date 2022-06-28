import React, { useContext, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AuthButton,
  BackgroundImage,
  ContentContainer,
  ScreenContainer,
} from "../components/account.screen.styles";
import {
  ErrorText,
  ErrorView,
  LoginField,
  LoginFieldView,
  LoginOptionsView,
} from "../components/login.screen.styles";

const RegistrationScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const { onRegistration, error } = useContext(AuthenticationContext);
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
              <LoginField
                secureTextEntry={true}
                label={"Repeat Password"}
                placeholder="Repeat Password"
                onChangeText={(val) => setSecondPassword(val)}
                value={secondPassword}
                autoCapitalize="none"
                textContentType="password"
              />

              {error && (
                <ErrorView>
                  <ErrorText>{error.toString()}</ErrorText>
                </ErrorView>
              )}
            </LoginFieldView>
            <AuthButton
              icon="lock"
              textColor="white"
              onPress={() => {
                if (password === secondPassword) {
                  onRegistration(username, password);
                } else {
                }
              }}
            >
              Login
            </AuthButton>
          </LoginOptionsView>
        </ContentContainer>
      </BackgroundImage>
    </ScreenContainer>
  );
};

export default RegistrationScreen;

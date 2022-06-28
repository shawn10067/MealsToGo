import React from "react";
import {
  ScreenContainer,
  BackgroundImage,
  BackgroundOverlay,
  ContentContainer,
  OptionsView,
  AuthButton,
} from "../components/account.screen.styles";

const AccountScreen = ({ navigation }) => {
  return (
    <>
      <ScreenContainer>
        <BackgroundImage>
          <BackgroundOverlay>
            <ContentContainer>
              <OptionsView>
                <AuthButton
                  icon="lock"
                  textColor="white"
                  onPress={() => navigation.navigate("Login")}
                >
                  Login
                </AuthButton>
                <AuthButton
                  icon="account"
                  textColor="white"
                  onPress={() => navigation.navigate("Registration")}
                >
                  create account
                </AuthButton>
              </OptionsView>
            </ContentContainer>
          </BackgroundOverlay>
        </BackgroundImage>
      </ScreenContainer>
    </>
  );
};

export default AccountScreen;

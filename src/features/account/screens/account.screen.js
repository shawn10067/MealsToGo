import React from "react";
import {
  ScreenContainer,
  BackgroundImage,
  BackgroundOverlay,
  ContentContainer,
  OptionsView,
  bgimage,
  AuthButton,
} from "../components/account.screen.styles";

const AccountScreen = () => {
  return (
    <>
      <ScreenContainer>
        <BackgroundImage source={bgimage}>
          <BackgroundOverlay>
            <ContentContainer>
              <OptionsView>
                <AuthButton icon="lock" mode="contained" textColor="white">
                  Login
                </AuthButton>
                <AuthButton icon="account" mode="contained" textColor="white">
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

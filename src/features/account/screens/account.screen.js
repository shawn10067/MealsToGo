import React, { useEffect, useRef } from "react";
import {
  ScreenContainer,
  BackgroundImage,
  BackgroundOverlay,
  ContentContainer,
  OptionsView,
  AuthButton,
  LottieContainer,
  AnimationConatiner,
} from "../components/account.screen.styles";
import LottieView from "lottie-react-native";

const AccountScreen = ({ navigation }) => {
  const animation = useRef(null);
  useEffect(() => {
    animation.current?.play();
  }, []);

  return (
    <>
      <ScreenContainer>
        <BackgroundImage>
          <BackgroundOverlay>
            <LottieContainer>
              <LottieView
                autoPlay
                loop
                source={require("../../../../assets/char-sui.json")}
                resizeMode="cover"
                key="animation"
                ref={(newAnimation) => {
                  animation.current = newAnimation;
                }}
              />
            </LottieContainer>
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

import React, { useEffect, useRef } from "react";
import {
  ScreenContainer,
  BackgroundImage,
  BackgroundOverlay,
  ContentContainer,
  OptionsView,
  AuthButton,
  LottieContainer,
} from "../components/account.screen.styles";
import LottieView from "lottie-react-native";

const AccountScreen = ({ navigation }) => {
  const lottieRef = useRef(null);
  useEffect(() => {
    if (lottieRef.current) {
      setTimeout(() => {
        lottieRef.current?.reset();
        lottieRef.current?.play();
      }, 100);
    }
  }, [lottieRef.current]);

  return (
    <>
      <ScreenContainer>
        <BackgroundImage>
          <BackgroundOverlay>
            <LottieContainer>
              <LottieView
                source={require("../../../../assets/char-sui.json")}
                resizeMode="cover"
                key="animation"
                ref={lottieRef}
                speed={1}
                loop={true}
                renderMode={"SOFTWARE"}
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

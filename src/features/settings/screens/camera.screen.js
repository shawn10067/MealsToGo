import AsyncStorage from "@react-native-async-storage/async-storage";
import { Camera, CameraType } from "expo-camera";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Pressable } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components/native";
import SafeAreaView from "../../../components/safeAreaView";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ProfilePictureContext } from "../../../services/profilePicture/profilePicture.context";

const CameraContainer = styled.View`
  flex: 1;
  background-color: aliceblue;
`;

const CameraView = styled(Camera)`
  flex: 1;
`;

const ContentView = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const SnapButton = styled(Pressable)`
  margin: 20px;
  height: 90px;
  width: 90px;
  border: 2px solid black;
  border-radius: 50%;
  background-color: ${({ pressed }) => (pressed ? "black" : "white")};
  color: white;
`;

const CameraScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const { setProfilePicture } = useContext(ProfilePictureContext);
  const cameraRef = useRef();
  const [permission, setPermissionGranted] = useState(false);
  const [pressed, setPressed] = useState(false);

  const snapPhoto = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`${user.id}-photo`, photo.uri);
      setProfilePicture(photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermissionGranted(status === "granted");
    })();
  }, []);

  if (permission === null) {
    return <SafeAreaView />;
  }

  if (permission === false) {
    return (
      <SafeAreaView>
        <Text>Grant permission to access camera</Text>
      </SafeAreaView>
    );
  }

  return (
    <CameraContainer>
      <CameraView type={CameraType.front} ref={cameraRef}>
        <ContentView>
          <SnapButton
            onPressIn={() => {
              setPressed(!pressed);
              snapPhoto();
            }}
            onPressOut={() => {
              setTimeout(() => setPressed(!pressed), 5);
            }}
            pressed={pressed}
          />
        </ContentView>
      </CameraView>
    </CameraContainer>
  );
};

export default CameraScreen;

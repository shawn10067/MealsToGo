import { Camera, CameraType } from "expo-camera";
import React, { useEffect, useState } from "react";
import { Text } from "react-native-paper";
import styled from "styled-components/native";
import SafeAreaView from "../../../components/safeAreaView";

const CameraContainer = styled.View`
  flex: 1;
  background-color: aliceblue;
`;

const CameraView = styled(Camera)`
  flex: 1;
`;

const CameraScreen = () => {
  const [permission, setPermissionGranted] = useState(false);

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
      <CameraView type={CameraType.front}></CameraView>
    </CameraContainer>
  );
};

export default CameraScreen;

import React, { useContext, useEffect, useState } from "react";
import SafeAreaView from "../../../components/safeAreaView";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { List, Avatar, Text } from "react-native-paper";
import styled from "styled-components/native";
import Spacer from "../../../components/spacer/spacer.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { ProfilePictureContext } from "../../../services/profilePicture/profilePicture.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space.md};
`;

const AvatarContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

const SettingsScreen = ({ props, navigation }) => {
  const { logout, user } = useContext(AuthenticationContext);
  const { profilePicture } = useContext(ProfilePictureContext);
  const [pfp, setPfp] = useState(profilePicture);

  useEffect(() => {
    setPfp(profilePicture);
  }, [profilePicture]);

  return (
    <SafeAreaView>
      <List.Section>
        <AvatarContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {pfp ? (
              <Avatar.Image size={90} source={{ uri: pfp }} />
            ) : (
              <Avatar.Icon size={90} icon="human" />
            )}
          </TouchableOpacity>
          <Spacer position="top" size="large">
            <Text>{user.email}</Text>
          </Spacer>
        </AvatarContainer>
        <SettingsItem
          title="Favourites"
          description="View your Favourites"
          left={() => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Log Out"
          description="Log Out of Your Profile"
          left={() => <List.Icon {...props} color="black" icon="logout" />}
          onPress={() => logout()}
        />
      </List.Section>
    </SafeAreaView>
  );
};

export default SettingsScreen;

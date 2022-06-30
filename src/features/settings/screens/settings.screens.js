import React, { useContext } from "react";
import SafeAreaView from "../../../components/safeAreaView";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { List } from "react-native-paper";

const SettingsScreen = ({ props, navigation }) => {
  const { logout } = useContext(AuthenticationContext);
  return (
    <SafeAreaView>
      <List.Section>
        <List.Item
          title="Favourites"
          description="View your Favourites"
          style={{ padding: 16 }}
          left={() => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          title="Log Out"
          description="Log Out of Your Profile"
          style={{ padding: 16 }}
          left={() => <List.Icon {...props} color="black" icon="logout" />}
          onPress={() => logout()}
        />
      </List.Section>
    </SafeAreaView>
  );
};

export default SettingsScreen;

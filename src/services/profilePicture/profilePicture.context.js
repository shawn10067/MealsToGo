import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const ProfilePictureContext = createContext();

export const ProfilePictureContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [profilePicture, setProfilePicture] = useState(null);

  const getPhoto = async (inputUser) => {
    const savedUri = await AsyncStorage.getItem(`${inputUser.uid}-photo`);
    console.log(`getting "${inputUser.uid}-photo"`);
    if (savedUri) {
      setProfilePicture(savedUri);
    }
  };

  useEffect(() => {
    getPhoto(user);
  }, [user]);

  return (
    <ProfilePictureContext.Provider
      value={{
        profilePicture,
        setProfilePicture,
      }}
    >
      {children}
    </ProfilePictureContext.Provider>
  );
};

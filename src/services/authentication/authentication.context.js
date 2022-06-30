import React, { useState, createContext } from "react";
import { createRequest, loginRequest } from "./authentication.service";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { getApp } from "firebase/app";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [loading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const app = getApp();
  const auth = getAuth(app);
  onAuthStateChanged(auth, (existingUser) => {
    if (existingUser) {
      setUser(existingUser);
    }
  });

  const logout = () => {
    signOut(auth)
      .then(() => setUser(null))
      .then(() => console.log("logged out"));
  };

  const onLogin = (email, password) => {
    setIsLoading(true);
    setError(null);
    loginRequest(email, password)
      .then((authenticatedUser) => {
        setUser(authenticatedUser);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setUser(null);
      })
      .finally(() => setIsLoading(false));
  };

  const onRegistration = (email, password, repeatedPassword) => {
    if (password === repeatedPassword) {
      setIsLoading(true);
      setError(null);
      createRequest(email, password)
        .then((authenticatedUser) => {
          setUser(authenticatedUser);
          setError(null);
        })
        .catch((err) => {
          setError(err);
          setUser(null);
        })
        .finally(() => setIsLoading(false));
    } else {
      setError(new Error("Passwords don't match"));
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        loading,
        user,
        error,
        onLogin,
        onRegistration,
        logout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

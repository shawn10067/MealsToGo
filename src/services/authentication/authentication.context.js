import React, { useState, createContext } from "react";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [loading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    loginRequest(email, password)
      .then((authenticatedUser) => {
        setUser(authenticatedUser);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
        setUser(null);
        console.log("error");
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        loading,
        user,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

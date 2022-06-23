import React, { createContext, useEffect, useState } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("toronto");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = (newKeyword) => {
    setIsLoading(true);
    setKeyword(newKeyword.toLowerCase());
  };

  useEffect(() => {
    setIsLoading(true);
    locationRequest(keyword)
      .then((data) => {
        setIsLoading(false);
        setError(false);
        setLocation(locationTransform(data));
      })
      .catch((err) => {
        setError("error", err);
        console.log(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        location,
        isLoading,
        error,
        search,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

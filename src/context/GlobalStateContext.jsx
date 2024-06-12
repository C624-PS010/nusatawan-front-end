import React, { createContext, useState, useEffect } from "react";
import localUser from "../utils/localUser";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(JSON.parse(localStorage.getItem("userProfile")));
  const [isLoggedIn, setIsLoggedIn] = useState(!!userProfile);

  useEffect(() => {
    const storedUserProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (storedUserProfile) {
      setUserProfile(storedUserProfile);
      setIsLoggedIn(true);
    }

    const handleStorageChange = () => {
      const updatedUserProfile = localUser.get();
      if (updatedUserProfile) {
        setUserProfile(updatedUserProfile);
        setIsLoggedIn(true);
      }
    };

    window.addEventListener("localUser", handleStorageChange);

    return () => {
      window.removeEventListener("localUser", handleStorageChange);
    };
  }, []);

  return (
    <GlobalStateContext.Provider value={{ userProfile, isLoggedIn, setUserProfile, setIsLoggedIn }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = React.useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export default GlobalStateContext;

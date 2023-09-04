import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { refressTokenRequest } from "../api/apiAuth";

export const ContextAuth = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccesstToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const saveUser = (dataRequest) => {
    setUser(dataRequest.user);
    localStorage.setItem("token", dataRequest.refressToken || "");
    setAccesstToken(dataRequest.accessToken);

    setIsAuthenticated(true);
  };
  const getIdUser=()=>user.id;

  const getAccessToken = () => accessToken;

  const getRefressToken = () => {
    const refressToken = localStorage.getItem("token");
    if (!refressToken) {
      return null;
    }
    return refressToken;
  };

  const checkAuth = async () => {
    try {
      if (isAuthenticated === false) {
        const refressToken = getRefressToken();
        if (!refressToken) {
          setIsAuthenticated(false);
        } else {
          const responseRequest = await refressTokenRequest(refressToken);
          if (responseRequest.response === false) {
            setIsAuthenticated(false);
          } else {
            const { data } = responseRequest;
            setAccesstToken(data.accessToken);
            setUser({ ...data.user });
            setIsAuthenticated(true);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const refressToken = () => {
      checkAuth();
    };
    refressToken();
  });

  useEffect(() => {
    
  }, [user])
  

  return (
    <ContextAuth.Provider
      value={{ isAuthenticated, saveUser, user, getAccessToken ,getIdUser}}
    >
      {children}
    </ContextAuth.Provider>
  );
};

export const useContextAuth = () => useContext(ContextAuth);

export default AuthContextProvider;

import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Actor, HttpAgent } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import {
  idlFactory,
  canisterId,
} from "../../../declarations/authclient_backend";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [authClient, setAuthClient] = useState();
  const [actor, setActor] = useState();

  const [principal, setPrincipal] = useState();
  const [isCopied, setIsCopied] = useState(false);
  const [copyCss, setCopyCss] = useState(
    "active:border-purple-600 active:shadow-none bg-gradient-to-tr from-purple-600 to-purple-500"
  );
  const [isHidden, setIsHidden] = useState(true);

  const navigate = useNavigate();
  const checkIsAuthenticated = async () => {
    try {
      const client = await AuthClient.create();
      setAuthClient(client);

      if (await client?.isAuthenticated()) {
        initActor(client);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const initActor = async (authClient) => {
    const identity = await authClient?.getIdentity();
    const host = "http://localhost:8080";
    const agent = new HttpAgent({ identity, host });

    // remove on live deployment
    agent.fetchRootKey();

    const actor = await Actor.createActor(idlFactory, {
      agent,
      canisterId,
    });

    setActor(actor);
  };

  const login = async () => {
    try {
      await authClient?.login({
        identityProvider: process.env.II_URL,
        onSuccess: async () => {
          initActor(authClient);
          navigate("/");
        },
        // 7 days in nanoseconds
        maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getPrincipalID = async () => {
    try {
      const data = await actor?.whoami();
      setPrincipal(data.toText());
      setIsHidden((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await authClient.logout();
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkIsAuthenticated();
  }, []);

  return (
    <AppContext.Provider
      value={{
        checkIsAuthenticated,
        login,
        logout,
        principal,
        getPrincipalID,
        isCopied,
        setIsCopied,
        copyCss,
        setCopyCss,
        isHidden,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

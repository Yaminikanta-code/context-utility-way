import React from "react";

export const createProvider = (Context, initialState) => {
  const Provider = ({ children }) => {
    const state = initialState();
    return <Context.Provider value={{ ...state }}>{children}</Context.Provider>;
  };

  return Provider;
};

export default createProvider;

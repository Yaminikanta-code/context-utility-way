import createProvider from "../utils/createProvider";
import { createContext, useState } from "react";

const AuthContext = createContext();

// Define state logic
const useAuthState = () => {
  const [user, setUser] = useState("No user logged in");

  return { user, setUser };
};

export const AuthProvider = createProvider(AuthContext, useAuthState); //pass context and the state to createProvider
export { AuthContext };

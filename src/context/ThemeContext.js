import createProvider from "../utils/createProvider";
import { createContext, useState } from "react";

const ThemeContext = createContext();

// Define state logic
const useThemeState = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  return { theme, toggleTheme };
};

export const ThemeProvider = createProvider(ThemeContext, useThemeState); //pass context and the state to createProvider
export { ThemeContext };

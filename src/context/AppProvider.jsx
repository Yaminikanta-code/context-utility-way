import { AuthProvider, AuthContext } from "./AuthContext";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import combineProviders from "../utils/combineProviders";

const AppProvider = combineProviders([AuthProvider, ThemeProvider]);

export { AuthContext, ThemeContext, AppProvider };

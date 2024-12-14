import React from "react";
import { AppProvider } from "./context/AppProvider";
import AppComponent from "./components/AppComponent";
import "./App.css";

/**
 * The main application component.
 *
 * This component wraps the {@link AppComponent} in an {@link AppProvider},
 * which provides the necessary context for the application to function.
 *
 * @returns {React.ReactElement} The main application component.
 */
const App = () => (
  <AppProvider>
    <AppComponent />
  </AppProvider>
);

export default App;

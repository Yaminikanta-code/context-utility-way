import React from "react";
import { AppProvider } from "./context/AppProvider";
import AppComponent from "./components/AppComponent";
import "./App.css";

const App = () => (
  <AppProvider>
    <AppComponent />
  </AppProvider>
);

export default App;

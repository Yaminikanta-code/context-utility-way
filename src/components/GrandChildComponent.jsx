import React, { useContext } from "react";
import { AuthContext, ThemeContext } from "../context/AppProvider";

const GrandChildComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, setUser } = useContext(AuthContext);

  return (
    <>
      <div>
        <h2>Auth Context</h2>
        <p>User: {user ? user : "No user logged in"}</p>
        <button onClick={() => setUser("John Doe")}>Login as John Doe</button>
      </div>
      <div>
        <h2>Theme Context</h2>
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Current Theme: {theme}
        </button>
      </div>
    </>
  );
};

export default GrandChildComponent;

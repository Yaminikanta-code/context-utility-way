import React from "react";
import ChildComponent from "./ChildComponent";

/**
 * A component that renders a <ChildComponent> with all contexts.
 *
 * @returns {React.ReactElement} The root component of the app.
 */
function AppComponent() {
  return (
    <>
      <ChildComponent />
    </>
  );
}

export default AppComponent;

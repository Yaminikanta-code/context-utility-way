import React from "react";
import GrandChildComponent from "./GrandChildComponent";

/**
 * A component that renders a GrandChildComponent.
 *
 * @returns {JSX.Element} JSX Element containing the GrandChildComponent.
 */
function ChildComponent() {
  return (
    <>
      <GrandChildComponent />
    </>
  );
}

export default ChildComponent;

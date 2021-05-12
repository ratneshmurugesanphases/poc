import React, { useContext } from "react";
import { SlateContext } from "./context";

function MainSlate() {
  const { sideSlateRef } = useContext(SlateContext);
  return (
    <div>
      MainSlate
      <button onClick={() => sideSlateRef.current.setState("ratnesh")}>
        SET
      </button>
    </div>
  );
}

export default MainSlate;

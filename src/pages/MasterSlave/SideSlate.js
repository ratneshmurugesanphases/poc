import React, { useContext, useState } from "react";
import { SlateContext } from "./context";

function SideSlate() {
  const { sideSlateRef } = useContext(SlateContext);
  const [state, setState] = useState("zero");
  sideSlateRef.current = { setState };
  return <div>SideSlate {state}</div>;
}

export default SideSlate;

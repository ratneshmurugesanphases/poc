import React from "react";

import { SlateContextProvider } from "../SlateContext";

import MainSlate from "./MainSlate";
import SideSlate from "./SideSlate";

function SlateApp() {
  return (
    <SlateContextProvider>
      <>
        <MainSlate />
        <SideSlate />
      </>
    </SlateContextProvider>
  );
}

export default SlateApp;

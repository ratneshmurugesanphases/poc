import React, { useRef, createContext } from "react";

export const SlateContext = createContext({});

export function SlateContextProvider({ children }) {
  const sideSlateRef = useRef(null);

  return (
    <SlateContext.Provider value={{ sideSlateRef }}>
      {children}
    </SlateContext.Provider>
  );
}

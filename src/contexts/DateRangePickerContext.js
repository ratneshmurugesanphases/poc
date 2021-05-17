import React, { useRef, createContext } from "react";

export const DateRangePickerContext = createContext({});

export function DateRangePickerContextProvider({ children }) {
  const customDateRangePickerRef = useRef(null);

  return (
    <DateRangePickerContext.Provider value={{ customDateRangePickerRef }}>
      {children}
    </DateRangePickerContext.Provider>
  );
}

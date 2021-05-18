import React, { useRef, createContext, useContext } from "react";

export const DateRangePickerContext = createContext({});

export function useDateRangePickerDeps() {
  return useContext(DateRangePickerContext);
}

export function DateRangePickerContextProvider({ children }) {
  const customDateRangePickerRef = useRef(null);

  return (
    <DateRangePickerContext.Provider value={{ customDateRangePickerRef }}>
      {children}
    </DateRangePickerContext.Provider>
  );
}

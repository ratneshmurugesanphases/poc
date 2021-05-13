import React, { useRef, createContext } from "react";

export const CalendarViewContext = createContext({});

export function CalendarViewContextProvider({ children }) {
  const customDateRangePickerRef = useRef(null);

  return (
    <CalendarViewContext.Provider value={{ customDateRangePickerRef }}>
      {children}
    </CalendarViewContext.Provider>
  );
}

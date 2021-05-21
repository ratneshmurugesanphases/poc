import React, { useRef, createContext, useContext } from "react";

export const CalendarViewContext = createContext({});

export function useCalendarViewContextDeps() {
  return useContext(CalendarViewContext);
}

export function CalendarViewContextProvider({ children }) {
  const customDateRangePickerRef = useRef(null);
  const newBookingFormRef = useRef(null);
  const editBookingFormRef = useRef(null);

  return (
    <CalendarViewContext.Provider
      value={{
        customDateRangePickerRef,
        newBookingFormRef,
        editBookingFormRef,
      }}
    >
      {children}
    </CalendarViewContext.Provider>
  );
}

import React, { useReducer, createContext, useContext, useRef } from "react";
import commonReducer from "reducers/commonReducer";

const initialState = {
  searchTerm: "",
};

export const CommonContext = createContext({});

export function CommonContextProvider({ children }) {
  const [state, dispatch] = useReducer(commonReducer, initialState);
  const customDateRangePickerRef = useRef(null);
  const newBookingFormRef = useRef(null);
  const editBookingFormRef = useRef(null);
  console.log("CommonContextProvider", state);
  return (
    <CommonContext.Provider
      value={{
        state,
        customDateRangePickerRef,
        newBookingFormRef,
        editBookingFormRef,
        dispatch,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
}

export function useCommonContextDeps() {
  return useContext(CommonContext);
}

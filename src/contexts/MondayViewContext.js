import React, { useReducer, createContext, useContext } from "react";
import mondayViewReducer from "reducers/mondayViewReducer";
import generateData from "helpers/generateData";

const { columns: cols, data: rows } = generateData(3);

const initialState = {
  cols,
  rows,
  sortByProperty: "email",
  sortType: true,
  dragOverColumn: "",
};

export const MondayViewContext = createContext({});

export function MondayViewContextProvider({ children }) {
  const [state, dispatch] = useReducer(mondayViewReducer, initialState);

  console.log("MondayViewContextProvider", state);

  return (
    <MondayViewContext.Provider value={{ state, dispatch }}>
      {children}
    </MondayViewContext.Provider>
  );
}

export function useMondayViewDeps() {
  return useContext(MondayViewContext);
}

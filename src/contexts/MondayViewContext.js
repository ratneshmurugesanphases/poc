import React, { useReducer, createContext, useContext } from "react";
import mondayViewReducer from "reducers/mondayViewReducer";
import generateData from "helpers/generateData";

const { columns: cols, data: rows } = generateData(3);

const initialState = {
  cols,
  rows,
  dragOverColumn: "",
  searchTerm: "",
  sortByProperty: "email",
  subProperty: "text",
  sortType: true,
  categoryTerm: "",
  selectedCategory: "mainarea",
};

export const MondayViewContext = createContext({});

export function MondayViewContextProvider({ children }) {
  const [state, dispatch] = useReducer(mondayViewReducer, initialState);
  console.log(state);
  return (
    <MondayViewContext.Provider value={{ state, dispatch }}>
      {children}
    </MondayViewContext.Provider>
  );
}

export function useMondayViewDeps() {
  return useContext(MondayViewContext);
}

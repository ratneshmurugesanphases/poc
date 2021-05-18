import React, { useReducer, createContext, useContext } from "react";
import mondayViewReducer from "reducers/mondayViewReducer";
// import toggleReducer from "reducers/toggleReducer";

import generateData from "helpers/generateData";
// const [sortByProperty, setSortByProperty] = useState("email");

const { columns: cols, data: rows } = generateData(3);

// const initialState = {
//   toggleState: {},
//   mondayViewState: { cols, rows, sortByProperty: "email", sortType: false },
// };

// const mainReducer = ({ toggleState, mondayViewState }, action) => ({
//   toggleReducer: toggleReducer(toggleState, action),
//   mondayViewReducer: mondayViewReducer(mondayViewState, action),
// });

export const MondayViewContext = createContext({});



export function MondayViewContextProvider({ children }) {
  // const [state, dispatch] = useReducer(mainReducer, initialState);


  const [state, dispatch] = useReducer(mondayViewReducer, {
    cols,
    rows,
    sortByProperty: "email",
    sortType: false,
  });

  console.log("MondayViewContextProvider", state);

  return (
    <MondayViewContext.Provider value={{ state, dispatch }}>
      {children}
    </MondayViewContext.Provider>
  );
}

export function useMondayViewDeps() {
  // console.log("useMondayViewDeps");
  return useContext(MondayViewContext);
}
import React, { useReducer, createContext, useContext } from "react";
import apiReducer from "reducers/apiReducer";

const initialApiState = {
  response: [],
  loading: false,
  error: null,
};

export const ApiContext = createContext({});

export function ApiContextProvider({ children }) {
  const [state, dispatch] = useReducer(apiReducer, initialApiState);
  // console.log("ApiContextProvider", state);
  return (
    <ApiContext.Provider value={{ state, dispatch }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApiDeps() {
  return useContext(ApiContext);
}

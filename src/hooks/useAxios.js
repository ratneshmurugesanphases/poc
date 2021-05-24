import { useEffect } from "react";
import axios from "axios";

import { actionTypes } from "reducers/apiReducer";

import { useApiDeps } from "contexts/ApiContext";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

/**
  - no need to JSON.stringify to then immediatly do a JSON.parse
  - don't use export defaults, because default imports are hard to search for
  - axios already support generic request in one parameter, no need to call specialized ones
**/

export const useAxios = (apiParams) => {
  const { state, dispatch } = useApiDeps();

  useEffect(() => {
    console.log("UE")
    dispatch({ type: actionTypes.makeApiCall });
    const fetchData = async (apiParams) => {
      try {
        const response = await axios.request(apiParams);
        if (response.status === 200) {
          dispatch({ type: actionTypes.succesApiCall, response: response.data });
          return;
        }
        dispatch({ type: actionTypes.errorApiCall, error: response.error });
      } catch (error) {
        console.log(`Catch block api ${error.message} in useAxios hook`);
        throw error;
      }
    };
    fetchData(apiParams);
  }, []);

  console.log("useAxios", state);

  return { ...state };
};

import { useEffect } from "react";
import axios from "axios";

import { MOCK_HOST } from "configs/apiConfig";
import { actionTypes } from "reducers/apiReducer";
import { useApiDeps } from "contexts/ApiContext";

axios.defaults.baseURL = MOCK_HOST;

/**
  - no need to JSON.stringify to then immediatly do a JSON.parse
  - don't use export defaults, because default imports are hard to search for
  - axios already support generic request in one parameter, no need to call specialized ones
**/

const headers = {
  "Content-type": "application/json; charset=UTF-8",
};

export const useAxios = (apiMethod, apiUrl, apiBody) => {
  const { state, dispatch } = useApiDeps();

  useEffect(() => {
    let didComponentMount = true;

    async function fetchData(apiMethod, apiUrl, apiBody) {
      try {
        if (didComponentMount) {
          dispatch({ type: actionTypes.makeApiCall });
          const response = await axios.request({
            headers,
            url: apiUrl,
            method: apiMethod,
            ...(apiMethod === "GET" ? null : { body: apiBody }),
          });
          if (response.status === 200) {
            dispatch({
              type: actionTypes.succesApiCall,
              response,
            });
            return;
          }
          dispatch({ type: actionTypes.errorApiCall, error: response.error });
        }
      } catch (error) {
        console.log(`Catch block api ${error.message} in useAxios hook`);
        throw error;
      }
    }
    fetchData(apiMethod, apiUrl, apiBody);

    return () => (didComponentMount = false);
  }, [dispatch, apiMethod, apiUrl, apiBody]);

  return state;
};

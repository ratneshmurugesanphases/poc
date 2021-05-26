import { useEffect } from "react";
import axios from "axios";

import { MOCK_HOST, PROD_HOST } from "configs/apiConfig";
import { actionTypes } from "reducers/apiReducer";
import { useApiDeps } from "contexts/ApiContext";

const axiosInstance = axios.create({
  baseURL: PROD_HOST || MOCK_HOST,
  // headers: {'X-Custom-Header': 'foobar'}
});

axiosInstance.defaults.headers.common["Authorization"] = "Bearer AUTH_TOKEN";
// axiosInstance.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";
// axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
// axiosInstance.defaults.headers.post["Accept"] = "*/*";
// axiosInstance.defaults.headers.post["Accept"] = "application/json";

export const useAxios = (apiMethod, apiUrl, apiBody) => {
  const { state, dispatch } = useApiDeps();

  useEffect(() => {
    let didComponentMount = true;

    async function fetchData(apiMethod, apiUrl, apiBody) {
      try {
        if (didComponentMount) {
          dispatch({ type: actionTypes.makeApiCall });
          console.log("parsed json", apiBody);
          const response = await axiosInstance({
            url: apiUrl,
            method: apiMethod,
            ...(apiMethod === "GET" ? null : { data: JSON.parse(apiBody) }),
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

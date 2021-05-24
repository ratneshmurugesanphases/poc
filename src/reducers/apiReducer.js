export const actionTypes = {
  makeApiCall: "MAKE_API_CALL",
  succesApiCall: "SUCCESS_API_CALL",
  errorApiCall: "ERROR_API_CALL",
};

function apiReducer(state, action) {
  switch (action.type) {
    case actionTypes.makeApiCall: {
      return {
        ...state,
        loading: true,
      };
    }
    case actionTypes.succesApiCall: {
      return {
        ...state,
        loading: false,
        response: action.response,
      };
    }
    case actionTypes.errorApiCall: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
}

export default apiReducer;

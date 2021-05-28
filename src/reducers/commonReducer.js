export const actionTypes = {
  updateSearch: "UPDATE_SEARCH",
};

function commonReducer(state, action) {
  // console.log("action", { state, action });
  console.log("commonReducer");
  switch (action.type) {
    case actionTypes.updateSearch: {
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      };
    }
    default: {
      return state;
    }
  }
}

export default commonReducer;

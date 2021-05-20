export const actionTypes = {
  swapColumn: "SWAP_COLUMN",
  dragOverColumn: "DRAG_OVER_COLUMN",
  updateSort: "UPDATE_SORT",
  updateSearch: "UPDATE_SEARCH",
};

function mondayViewReducer(state, action) {
  // console.log("action", { state, action });
  // console.log("mondayViewReducer");
  switch (action.type) {
    case actionTypes.updateSort: {
      return {
        ...state,
        subProperty: action.payload.subProperty,
        sortType: action.payload.sortType,
        sortByProperty: action.payload.sortByProperty,
      };
    }
    case actionTypes.swapColumn: {
      return { ...state, cols: action.payload.swappedCol };
    }
    case actionTypes.dragOverColumn: {
      return { ...state, dragOverColumn: action.payload.id };
    }
    case actionTypes.updateSearch: {
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
        categoryTerm: action.payload.categoryTerm,
        selectedCategory: action.payload.selectedCategory,
      };
    }
    default: {
      return state;
    }
  }
}

export default mondayViewReducer;

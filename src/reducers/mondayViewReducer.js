export const actionTypes = {
  swapColumn: "SWAP_COLUMN",
  updateSort: "UPDATE_SORT",
  dragOverColumn: "DRAG_OVER_COLUMN",
  searchByContent: "SEARCH_BY_CONTENT",
  searchByCategory: "SEARCH_BY_CATEGORY",
  updateCategory: "UPDATE_CATEGORY",
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
    case actionTypes.updateCategory: {
      return {
        ...state,
        selectedCategory: action.payload.selectedCategory,
      };
    }
    case actionTypes.swapColumn: {
      return { ...state, cols: action.payload.swappedCol };
    }
    case actionTypes.dragOverColumn: {
      return { ...state, dragOverColumn: action.payload.id };
    }
    case actionTypes.searchByContent: {
      return { ...state, searchTerm: action.payload.searchTerm };
    }
    case actionTypes.searchByCategory: {
      return {
        ...state,
        searchCategoryTerm: action.payload.searchCategoryTerm,
      };
    }
    default: {
      return state;
    }
  }
}

export default mondayViewReducer;

import sortData from "helpers/sortData";

export const actionTypes = {
  swapColumn: "SWAP_COLUMN",
  updateSort: "UPDATE_SORT",
  dragOverColumn: "DRAG_OVER_COLUMN",
  searchByAny: "SEARCH_BY_ANY",
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
    case actionTypes.searchByAny: {
      return { ...state, searchTerm: action.payload.searchTerm };
    }
    default: {
      return state;
    }
  }
}

export default mondayViewReducer;

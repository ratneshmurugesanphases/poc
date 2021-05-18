import sortData from "helpers/sortData";

export const actionTypes = {
  swapColumn: "SWAP_COLUMN",
  sortByProperty: "SORT_BY_PROPERTY",
  dragOverColumn: "DRAG_OVER_COLUMN",
};

function mondayViewReducer(state, action) {
  const { rows } = state;
  console.log("action", { state, action });
  console.log("mondayViewReducer");
  switch (action.type) {
    case actionTypes.sortByProperty: {
      return {
        ...state,
        rows: sortData({
          datatoBeSorted: rows,
          sortByProperty: action.payload.sortByProperty,
          subProperty: action.payload.subProperty,
          sortType: !state.sortType,
        }),
        sortType: !state.sortType,
        sortByProperty: action.payload.colName,
      };
    }
    case actionTypes.swapColumn: {
      return { ...state, cols: action.payload.swappedCol };
    }
    case actionTypes.dragOverColumn: {
      return { ...state, dragOverColumn: action.payload.id };
    }
    default: {
      return state;
    }
  }
}

export default mondayViewReducer;

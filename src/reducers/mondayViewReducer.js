import sortData from "helpers/sortData";

// const [sortType, setSortType] = useState(false);

export const actionTypes = {
  //   setSortType: "SORTTYPE",
  swapColumn: "SWAP_COLUMN",
  sortByProperty: "SORT_BY_PROPERTY",
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
          sortType: action.payload.sortType,
        }),
        sortByProperty: action.payload.colName,
      };
    }
    case actionTypes.swapColumn: {
      return { ...state, cols: action.payload.swappedCol };
    }
    default: {
      return state;
    }
  }
}

export default mondayViewReducer;

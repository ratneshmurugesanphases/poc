function sortData({
  datatoBeSorted,
  sortByProperty,
  subProperty,
  sortType = true,
}) {
  return sortType
    ? datatoBeSorted.sort((prop1, prop2) => {
        if (
          prop1[sortByProperty][subProperty] <
          prop2[sortByProperty][subProperty]
        ) {
          return -1;
        } else if (
          prop1[sortByProperty][subProperty] >
          prop2[sortByProperty][subProperty]
        ) {
          return 1;
        } else {
          return 0;
        }
      })
    : datatoBeSorted.sort((prop1, prop2) => {
        if (
          prop1[sortByProperty][subProperty] <
          prop2[sortByProperty][subProperty]
        ) {
          return 1;
        } else if (
          prop1[sortByProperty][subProperty] >
          prop2[sortByProperty][subProperty]
        ) {
          return -1;
        } else {
          return 0;
        }
      });
}

export default sortData;

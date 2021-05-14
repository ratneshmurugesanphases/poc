function sortData({ datatoBeSorted, sortByProperty, sortType = "ascending" }) {
  return sortType
    ? datatoBeSorted.sort((prop1, prop2) => {
        if (prop1[sortByProperty] < prop2[sortByProperty]) {
          return -1;
        } else if (prop1[sortByProperty] > prop2[sortByProperty]) {
          return 1;
        } else {
          return 0;
        }
      })
    : datatoBeSorted.sort((prop1, prop2) => {
        if (prop1[sortByProperty] < prop2[sortByProperty]) {
          return 1;
        } else if (prop1[sortByProperty] > prop2[sortByProperty]) {
          return -1;
        } else {
          return 0;
        }
      });
}

export default sortData;

export function filterDataByProperty(
  data,
  filterTerm,
  filterByProperty = null
) {
  const lowercasedSearchTerm = filterTerm ? filterTerm.toLowerCase() : "";
  const filterCallback = (dataObj) => {
    return (
      dataObj[filterByProperty].toLowerCase().indexOf(lowercasedSearchTerm) !==
      -1
    );
  };
  return data.filter(filterCallback);
}

export function filterDataByCategory(
  data,
  categoryTerm,
  selectedCategory,
) {
  const lowercasedSearchTerm = categoryTerm ? categoryTerm.toLowerCase() : "";
  const filterCallback = (dataObj) => {
    return (
      dataObj[selectedCategory].toLowerCase().indexOf(lowercasedSearchTerm) !==
      -1
    );
  };
  return data.filter(filterCallback);
}

export function filterGridDataByText(data, filterTerm) {
  const lowercasedSearchTerm = filterTerm ? filterTerm.toLowerCase() : "";
  const filterCallback = (dataObj) => {
    return Object.keys(dataObj).some((property) => {
      return (
        dataObj[property].text.toLowerCase().indexOf(lowercasedSearchTerm) !==
        -1
      );
    });
  };
  return data.filter(filterCallback);
}

function filterData(data, searchTerm, filterByProperty = null) {
  const lowercasedSearchTerm = searchTerm.toLowerCase();
  const filterByRowProps = (rowObj) => {
    if (filterByProperty) {
      return (
        rowObj[filterByProperty].toLowerCase().indexOf(lowercasedSearchTerm) !==
        -1
      );
    }
    return Object.keys(rowObj).some((property) => {
      return (
        rowObj[property].text.toLowerCase().indexOf(lowercasedSearchTerm) !== -1
      );
    });
  };
  return data.filter(filterByRowProps);
}

export default filterData;

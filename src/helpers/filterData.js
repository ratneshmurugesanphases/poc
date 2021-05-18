function filterData(data, searchTerm) {
  const lowercasedSearchTerm = searchTerm.toLowerCase();
  const filterByRowProps = (rowObj) => {
    return Object.keys(rowObj).some((property) => {
      return (
        rowObj[property].text.toLowerCase().indexOf(lowercasedSearchTerm) !== -1
      );
    });
  };
  return data.filter(filterByRowProps);
}

export default filterData;

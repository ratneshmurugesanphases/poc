import {date } from "faker";

const generateData = (totalRows = 5) => {
  let rows = [];
  for (let i = 0; i < totalRows; i++) {
    rows.push({
      "Subarea": `Subarea ${i}`,
      "Comments": `Comments ${i}`,
      "Status": `Status ${i}`,
      "Email": `email@email.com ${i}`,
      "Link": `www.abc${i}.com`,
      "Timeline": date.past().toLocaleDateString("en-US"),
      "Oppe": `Oppe ${i}`,
      "Tags": `Tags ${i}`,
      "Initiative contact person": `ICP ${i}`,
      "Aktor": `Aktor name ${i}`,
      "Scenes": `Scene ${i}`,
      "Id": i
    });
  }

  return {
    data: rows,
    columns: Object.keys(rows[0]),
  };
};

export default generateData;

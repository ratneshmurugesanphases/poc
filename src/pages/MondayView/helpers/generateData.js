import { name, internet, date } from "faker";
import { initialTableColumnOrder as columnNames } from "../config/base";

const generateData = (totalRows = 5) => {
  let rows = [];
  for (let i = 0; i < totalRows; i++) {
    rows.push({
      [columnNames[0]]: name.lastName(),
      [columnNames[1]]: `${name.firstName()} ${name.lastName()}`,
      [columnNames[2]]: internet.email(),
      [columnNames[3]]: date.past().toLocaleDateString("en-US"),
      id: "ID"
    });
  }

  return {
    data: rows,
    columns: Object.keys(rows[0]),
  };
};

export default generateData;

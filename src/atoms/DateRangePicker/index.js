import React from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Modal } from "@material-ui/core";
import { DateRangePicker } from "react-date-range";

import "./styles.scss";

import useDateRangePicker from "hooks/useDateRangeController";

const CustomDateRangePicker = () => {
  const [
    minDate,
    dateRange,
    showDatePicker,
    setShowDatePicker,
    handleDateChange,
  ] = useDateRangePicker();

  // console.log(showDatePicker);

  return (
    <div tabIndex={0}>
      <Modal
        open={showDatePicker}
        onClose={(_) => setShowDatePicker(!showDatePicker)}
        aria-labelledby="Date range picker"
        aria-describedby="Date range picker"
      >
        <DateRangePicker
          onChange={handleDateChange}
          showSelectionPreview={false}
          showDateDisplay={false}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={dateRange}
          minDate={minDate}
          // maxDate={new Date()}
          // locale={null}
          direction="horizontal"
        />
      </Modal>
    </div>
  );
};

export default CustomDateRangePicker;

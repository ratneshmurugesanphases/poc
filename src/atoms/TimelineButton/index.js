import React from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

import { format } from "date-fns";
import { Modal } from "@material-ui/core";

import useDateRangeController from "hooks/useDateRangeController";
import { CalendarViewContextProvider } from "contexts/CalendarViewContext";

import "./styles.scss";

function Timeline() {
  const [
    minDate,
    dateRange,
    showDatePicker,
    setShowDatePicker,
    handleDateChange,
  ] = useDateRangeController();
  // const { customDateRangePickerRef } = useContext(DateRangePickerContext);

  // useEffect(() => {
  //   const currentRef = customDateRangePickerRef;
  //   currentRef &&
  //     currentRef.current &&
  //     currentRef.current.setShowDatePicker((showDatePicker) => !showDatePicker);

  //   return () => {};
  // }, [customDateRangePickerRef]);

  const start_date = dateRange[0].startDate;
  const end_date = dateRange[0].endDate;

  return (
    <>
      <button
        onClick={(_) => setShowDatePicker(!showDatePicker)}
        // className={classes.dateSelector}
      >
        <span>
          <div>
            {start_date && (
              <span>{format(start_date, "MMM-dd-yyyy")}</span>
            )}
            {end_date && <span>{format(end_date, "MMM-dd-yyyy")}</span>}
          </div>
        </span>
      </button>
      {/* <div style={{ display: showDatePicker ? 'block' : 'none', position: "absolute", top: "27%"}}> */}
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
      {/* </div> */}
    </>
  );
}

export default function TimelineButton() {
  return (
    <CalendarViewContextProvider>
      <Timeline />
    </CalendarViewContextProvider>
  );
}

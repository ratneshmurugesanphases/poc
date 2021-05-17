import React from "react";
import Scheduler from "atoms/Scheduler";
import CustomDateRangePicker from "atoms/DateRangePicker";
import { DateRangePickerContextProvider } from "contexts/DateRangePickerContext";

function DhtmlxDefaultView() {
  return (
    <DateRangePickerContextProvider>
      <div className="scheduler-container">
        <Scheduler />
        <CustomDateRangePicker
        // classes={classes}
        // fromToDates={fromToDates}
        // label={"Selected Date Range"}
        // handleDateChange={handleDateChange}
        />
        {/* <Link
        to={{
          pathname: `/contact/D`,
          state: { background: useLocation().location },
        }}
      >
        Switch
      </Link> */}
      </div>
    </DateRangePickerContextProvider>
  );
}
export default DhtmlxDefaultView;

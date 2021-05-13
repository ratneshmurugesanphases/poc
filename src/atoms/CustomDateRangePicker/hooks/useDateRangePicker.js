import { useState, useContext } from "react";
import { isBefore } from "date-fns";
import {
  START_DATE,
} from "pages/CalendarView/config/dateConfig";
import { CalendarViewContext } from "contexts/CalendarViewContextProvider";

const useDateRangePicker = () => {
  const { customDateRangePickerRef } = useContext(CalendarViewContext);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  customDateRangePickerRef.current = { setShowDatePicker, setDateRange };

  const handleDateChange = (item) => {
    console.log("handleDateChange");
    const dateLessThanActualStartDate = isBefore(
      new Date(item.selection.startDate),
      new Date(START_DATE)
    );
    !dateLessThanActualStartDate && setDateRange([item.selection]);
  };

  // useEffect((_) => {
  //   setDateRange([
  //     {
  //       startDate: new Date(2020, 2, 2),
  //       endDate: new Date(),
  //       key: "selection",
  //     },
  //   ]);
  // }, []);

  // console.log("useDRP", customDateRangePickerRef);

  let minDate = new Date();

  return [
    minDate,
    dateRange,
    showDatePicker,
    setShowDatePicker,
    handleDateChange
  ];
};

export default useDateRangePicker;

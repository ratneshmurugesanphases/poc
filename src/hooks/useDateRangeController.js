import { useState } from "react";
import { isBefore } from "date-fns";
import { START_DATE } from "configs/dateConfig";
import { useCommonContextDeps } from "contexts/CommonContext";

const useDateRangeController = () => {
  const { customDateRangePickerRef } = useCommonContextDeps();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  if (customDateRangePickerRef)
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
    handleDateChange,
  ];
};

export default useDateRangeController;

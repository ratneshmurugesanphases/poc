import { useCallback, useEffect, useState, useMemo } from "react";
import { differenceInHours } from "date-fns";
import styled from "styled-components";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import DatePicker from "react-date-picker";

import LogoutButton from "atoms/LogoutButton";
import SearchField from "atoms/SearchField";
import { useCommonContextDeps } from "contexts/CommonContext";
import NewBookingForm from "molecules/NewBookingForm";
// import EditBookingForm from "molecules/EditBookingForm";
import { getPodioStatusColors } from "configs/colorConfig";

import "./Scheduler.scss";

const StyledScheduler = styled.div`
  display: grid;
  grid-template-rows: 1fr 900px;
`;

const StyledToolbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
`;

const scheduler = window.scheduler;
const sceneA = { key: 1, label: "Scene A - SeaU" };
const sceneB = { key: 2, label: "Scene B - Helsingborg Arena" };
const sceneC = { key: 3, label: "Scene C - City" };
const sceneD = { key: 4, label: "Scene D - Oceanhamnen" };
const sceneE = { key: 5, label: "Scene E - Off-program" };

const yUnitData = [sceneA, sceneB, sceneC, sceneD, sceneE];

scheduler.createTimelineView({
  name: "timeline_day_view",
  // Minute type
  x_unit: "minute",
  x_date: "%H:%i",
  x_step: 15, // interval
  x_size: 96,
  // x_start: 0,
  // x_length: 1,
  y_unit: yUnitData,
  // x_height: 30,
  y_property: "section_id",
  render: "bar",
  scrollable: true,
  column_width: 50,
  section_autoheight: true,
  event_dy: "full",
  // dy: 50,
  round_position: true,
  second_scale: {
    x_unit: "minute", // unit which should be used for second scale
    x_date: "%F %d", // date format which should be used for second scale, "July 01"
  },
});

scheduler.createTimelineView({
  name: "timeline_week_view",
  // Hour type
  x_unit: "hour",
  x_date: "%H:%i",
  x_step: 1, // interval
  x_size: 7 * 24,
  // x_start: 0,
  // x_length: 1,
  y_unit: yUnitData,
  // x_height: 30,
  y_property: "section_id",
  render: "bar",
  scrollable: true,
  column_width: 60,
  section_autoheight: true,
  event_dy: "full",
  // dy: 50,
  round_position: true,
  second_scale: {
    x_unit: "hour", // unit which should be used for second scale
    x_date: "%F %d", // date format which should be used for second scale, "July 01"
  },
});

scheduler.templates.tooltip_date_format =
  scheduler.date.date_to_str("%Y-%m-%d %H:%i");
scheduler.config.details_on_create = true;
scheduler.config.details_on_dblclick = true;
// scheduler.config.multi_day = true;
// scheduler.config.mark_now = true;
// scheduler.config.now_date = new Date(2021, 4, 27, 11, 42);
// scheduler.xy.menu_width = 0;
// scheduler.attachEvent("onClick",function(){ return false; });
scheduler.config.preserve_scale_length = false;

const format = scheduler.date.date_to_str("%H:%i");
scheduler.templates.event_bar_text = function (start, end, event) {
  const startDate = start;
  const endDate = end;
  // console.log("event_bar_text", event);
  return [
    event.text + "<br />",
    event.section_id + "<br />",
    "Status:" + event.status + "<br/>",
    format(startDate) + " - " + format(endDate) + "<br />",
    startDate + " - " + endDate,
  ].join("");
};
// scheduler.templates.tooltip_text = function (start, end, event) {
//   const html = [];
//   html.push("Booking: <b> </b>");
//   html.push("Room: <b> SCENE-LABEL-TEST</b>");
//   html.push("Check-in: <b>01/01/2021-TEST</b>");
//   html.push("Check-out: <b>01/01/2021-TEST</b>");
//   html.push("PAID-TEST, PAID-TEST");
//   return html.join("<br>");
// };

const podioStatusColors = getPodioStatusColors();

const Scheduler = () => {
  const {
    state: commonState,
    dispatch,
    newBookingFormRef,
  } = useCommonContextDeps();

  const [state, setState] = useState({
    startDate: new Date(),
    endDate: new Date(),
    currentView: "timeline_day_view",
    // schedulerYUnitData: [sceneA, sceneB, sceneC, sceneD],
    schedulerData: [
      {
        start_date: "2021-05-28 00:00",
        end_date: "2021-05-28 12:00",
        text: "Initiative B",
        color: podioStatusColors.uncertain,
        status: "uncertain",
        section_id: 2,
        textColor: "black",
      },
      {
        start_date: "2021-05-28 00:00",
        end_date: "2021-05-28 24:30",
        text: "Initiative A",
        section_id: 4,
        color: podioStatusColors.cancelled,
        status: "cancelled",
        textColor: "black",
      },
      {
        start_date: "2021-05-28 00:00",
        end_date: "2021-05-28 11:30",
        text: "Initiative C",
        section_id: 1,
        color: podioStatusColors.notDone,
        status: "notDone",
        textColor: "black",
      },
      {
        start_date: "2021-05-28 00:00",
        end_date: "2021-05-28 11:30",
        text: "Initiative D",
        section_id: 3,
        status: "clear",
        color: podioStatusColors.clear,
        textColor: "black",
      },
      {
        start_date: "2021-05-28 00:00",
        end_date: "2021-05-28 15:30",
        text: "Initiative E",
        section_id: 5,
        status: "followUp",
        color: podioStatusColors.followUp,
        textColor: "black",
      },
      {
        start_date: "2021-05-10 00:00",
        end_date: "2021-05-10 5:30",
        text: "Initiative F",
        section_id: 2,
        status: "followUp",
        color: podioStatusColors.followUp,
        textColor: "black",
      },
    ],
  });

  const { currentView, startDate, endDate, schedulerData } = state;

  const startDateFromDatePicker = startDate;
  const endDateFromDatePicker = endDate;

  const dateValues = useMemo(
    () => [startDateFromDatePicker, endDateFromDatePicker],
    [startDateFromDatePicker, endDateFromDatePicker]
  );

  const handleDayViewClick = useCallback(() => {
    setState((state) => ({ ...state, currentView: "timeline_day_view" }));
  }, []);

  const handleWeekViewClick = useCallback(() => {
    setState((state) => ({
      ...state,
      currentView: "timeline_week_view",
    }));
  }, []);

  const handleDateChange = (value) =>
    setState({ ...state, startDate: value, endDate: new Date() });

  const handleDateRangeChange = (value) =>
    setState({ ...state, startDate: value[0], endDate: value[1] });

  const handleSearchChange = (value) => {
    dispatch({ type: "UPDATE_SEARCH", payload: { searchTerm: value } });
  };

  const handleNewFormClick = () => {
    if (newBookingFormRef && newBookingFormRef.current) {
      newBookingFormRef.current.setOpen((open) => !open);
    }
  };

  useEffect(() => {
    scheduler.xy.nav_height = 0;
    scheduler.config.header = [];
    scheduler.templates.timeline_scale_label = function (key, label, section) {
      return `${key}${label}${section}`;
    };
    scheduler.init("scheduler_here", new Date(), currentView);
    scheduler.parse(schedulerData);
    if (currentView === "timeline_day_view") {
      scheduler.updateView(startDateFromDatePicker, currentView);
    } else {
      const diffInHours =
        Math.abs(
          differenceInHours(
            new Date(startDateFromDatePicker),
            new Date(endDateFromDatePicker)
          )
        ) || 24;
      console.log("diffInHours", diffInHours);
      scheduler.getView(currentView).x_size = diffInHours;
      scheduler.updateView(startDateFromDatePicker, currentView);
    }
    // const availableEvents = scheduler.getEvents();
    // console.log("availableEvents", availableEvents);
    console.log("SCHEDULER - UE");

    return () => scheduler.clearAll();
  }, [
    newBookingFormRef,
    startDateFromDatePicker,
    endDateFromDatePicker,
    currentView,
    schedulerData,
    handleDayViewClick,
    handleWeekViewClick,
  ]);

  console.log("Scheduler - index.js", state);

  return (
    <>
      <StyledScheduler>
        <StyledToolbar>
          <button onClick={() => null}>Dashboard</button>
          <button onClick={handleDayViewClick}>Day View</button>
          <button onClick={handleWeekViewClick}>Week View</button>
          <button onClick={() => null}>Map </button>
          <button onClick={() => null}> +/- Zoom Interval</button>
          {currentView === "timeline_day_view" && (
            <DatePicker
              onChange={handleDateChange}
              value={dateValues}
              locale="sv"
            />
          )}
          {currentView === "timeline_week_view" && (
            <DateRangePicker
              onChange={handleDateRangeChange}
              value={dateValues}
              locale="sv"
            />
          )}
          <button onClick={handleNewFormClick}>+ Add New</button>
          <button onClick={() => null}>Print View</button>
          <div style={{ width: "200px" }}>
            <SearchField
              searchTerm={commonState.searchTerm}
              handleSearchChange={handleSearchChange}
            />
          </div>
          <LogoutButton />
        </StyledToolbar>
        <div
          id="scheduler_here"
          className="dhx_cal_container"
          style={{ width: "100%", height: "100%" }}
          key="scheduler_here"
        ></div>
      </StyledScheduler>
      <NewBookingForm />
      {/* <EditBookingForm /> */}
    </>
  );
};

export default Scheduler;

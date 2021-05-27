import { useEffect, useRef, useState } from "react";
import { Calendar as CalendarDHX } from "dhx-suite";

import { differenceInHours } from "date-fns";
// import useScheduleController from "../../hooks/useScheduleController";
// import NewBookingForm from "molecules/NewBookingForm";
// import EditBookingForm from "molecules/EditBookingForm";

import "./Scheduler.scss";

const scheduler = window.scheduler;
const yUnitData = [
  { key: 1, label: "Label 1" },
  { key: 2, label: "Label 2" },
  { key: 3, label: "Label 3" },
  { key: 4, label: "Label 4" },
];

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
  const paidStatus = "PAID-TEST";
  const startDate = start;
  const endDate = end;
  return [
    event.text + "<br />",
    event.section_id + "<br />",
    format(startDate) + " - " + format(endDate) + "<br />",
    startDate + " - " + endDate,
    "<div class='booking_status booking-option'> BOOKED-TEST </div>",
    "<div class='booking_paid booking-option'>" + paidStatus + "</div>",
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
const Scheduler = () => {
  const datePickerSoloRef = useRef(null);
  const datePickerStartRef = useRef(null);
  const datePickerEndRef = useRef(null);
  const [state, setState] = useState({
    startDate: new Date(),
    endDate: new Date(),
    currentView: "timeline_day_view",
  });
  const { currentView, startDate, endDate } = state;

  const startDateFromDatePicker = startDate;
  const endDateFromDatePicker = endDate;

  useEffect(() => {
    //===============
    //Data loading
    //===============
    // scheduler.config.lightbox.sections = [
    //   {
    //     name: "description",
    //     height: 50,
    //     map_to: "text",
    //     type: "textarea",
    //     focus: true,
    //   },
    //   {
    //     name: "custom",
    //     height: 30,
    //     type: "timeline",
    //     options: null,
    //     map_to: "section_id",
    //   }, //type should be the same as name of the tab
    //   { name: "time", height: 72, type: "time", map_to: "auto" },
    // ];
    scheduler.config.header = [
      {
        html: "DASHBOARD",
      },
      {
        html: "DAY",
        view: "timeline_day_view",
        click: () => {
          setState((state) => ({ ...state, currentView: "timeline_day_view" }));
          // scheduler.updateView(startDateFromDatePicker, "timeline_day_view");
        },
      },
      {
        html: "WEEK",
        view: "timeline_week_view",
        click: () => {
          setState((state) => ({
            ...state,
            currentView: "timeline_week_view",
          }));
          // scheduler.updateView(startDateFromDatePicker, "timeline_week_view");
        },
      },
      {
        html: "MAP",
      },
      "spacer",
      {
        view: "date",
      },
      "spacer",
    ];

    scheduler.templates.timeline_scale_label = function (key, label, section) {
      return `${key}${label}`;
    };

    scheduler.init("scheduler_here", new Date(), currentView);
    scheduler.parse([
      {
        start_date: "2021-05-27 09:00",
        end_date: "2021-05-27 12:00",
        text: "Initiative B",
        section_id: 2,
      },
      {
        start_date: "2021-05-27 23:00",
        end_date: "2021-05-27 24:30",
        text: "Initiative A",
        section_id: 4,
        color: "#FF9633",
        textColor: "white",
      },
      {
        start_date: "2021-05-10 00:00",
        end_date: "2021-05-10 11:30",
        text: "Initiative C",
        section_id: 1,
        color: "#9575CD",
        textColor: "white",
      },
    ]);
    // const availableEvents = scheduler.getEvents();
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
      // scheduler.setCurrentView(); // redraws scheduler
      scheduler.updateView(startDateFromDatePicker, currentView);
    }
    // console.log("availableEvents", availableEvents);
    console.log("SCHEDULER - UE");

    return () => scheduler.clearAll();
  }, [startDateFromDatePicker, endDateFromDatePicker, currentView]);

  useEffect(() => {
    datePickerSoloRef.current = new CalendarDHX(datePickerSoloRef.current, {
      css: "dhx_widget--bordered",
      value: new Date(startDateFromDatePicker),
    });
    datePickerStartRef.current = new CalendarDHX(datePickerStartRef.current, {
      css: "dhx_widget--bordered",
      value: new Date(startDateFromDatePicker),
    });
    datePickerEndRef.current = new CalendarDHX(datePickerEndRef.current, {
      css: "dhx_widget--bordered",
      value: new Date(endDateFromDatePicker),
    });

    // Events
    datePickerSoloRef.current.events.on("change", (date, id) => {
      setState((state) => ({ ...state, startDate: date.toString() }));
    });
    datePickerStartRef.current.events.on("change", (date, id) => {
      setState((state) => ({ ...state, startDate: date.toString() }));
    });
    datePickerEndRef.current.events.on("change", (date, id) => {
      setState((state) => ({ ...state, endDate: date.toString() }));
    });

    datePickerStartRef.current.link(datePickerEndRef.current);

    console.log("DP - UE");
    return () => {
      console.log("DP - Unmounted");
    };
  }, [currentView, startDateFromDatePicker, endDateFromDatePicker]);

  console.log("Scheduler - index.js", state);
  return (
    <>
      {currentView === "timeline_day_view" && (
        <span key="datePickerSolo" ref={datePickerSoloRef}></span>
      )}
      {currentView === "timeline_week_view" && (
        <>
          <span key="datePickerStart" ref={datePickerStartRef}></span>
          <span key="datePickerEnd" ref={datePickerEndRef}></span>
        </>
      )}
      <div
        id="scheduler_here"
        className="dhx_cal_container"
        style={{ width: "100%", height: "100%" }}
        key="scheduler_here"
      ></div>
      {/* <NewBookingForm />
      <EditBookingForm /> */}
    </>
  );
};

export default Scheduler;

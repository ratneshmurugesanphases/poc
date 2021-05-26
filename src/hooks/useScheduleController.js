// import { useRef, useEffect } from "react";
// // import { getDate, getMonth, getYear } from "date-fns";
// // import { useCalendarViewContextDeps } from "contexts/CalendarViewContext";
// // import getSchedulerData from "helpers/getSchedulerData";


// let scripts = [
//   {
//     src: "/codebase/dhtmlxscheduler.js",
//   },
//   { src: "/codebase/ext/dhtmlxscheduler_timeline.js" },
//   { src: "/codebase/ext/dhtmlxscheduler_treetimeline.js" },
//   {
//     src: "/codebase/ext/dhtmlxscheduler_daytimeline.js",
//   },
// ];
// //Append the script element on each iteration
// scripts.forEach((item) => {
//   const script = document.createElement("script");
//   script.src = item.src;
//   script.async = true;
//   document.body.appendChild(script);
// });

// const scheduler = window.scheduler;
// const useScheduleController = () => {
//   const schedulerContainerRef = useRef(null);
//   // const { customDateRangePickerRef, newBookingFormRef } =
//   //   useCalendarViewContextDeps();
//   // const [customDateRangePickerRef] = useState(customDateRangePickerRef);

//   //TODO - use baseConfig for default values
//   useEffect((_) => {


//     // const schedulerData = getSchedulerData();
//     // scheduler.skin = "material";
//     // scheduler.config.header = [
//     //   "day",
//     //   "week",
//     //   "spacer",
//     //   "spacer",
//     //   {
//     //     view: "date",
//     //     click: () =>
//     //       customDateRangePickerRef &&
//     //       customDateRangePickerRef.current &&
//     //       customDateRangePickerRef.current.setShowDatePicker(
//     //         (showDatePicker) => !showDatePicker
//     //       ),
//     //   },
//     //   "spacer",
//     //   {
//     //     html: "RESERVE",
//     //     click: () =>
//     //       newBookingFormRef &&
//     //       newBookingFormRef.current &&
//     //       newBookingFormRef.current.setOpen((open) => !open),
//     //   },
//     //   "spacer",
//     //   "prev",
//     //   "today",
//     //   "next",
//     // ];
//     // scheduler.config.fix_tab_position = false;
//     // scheduler.config.hour_date = "%g:%i %A";
//     // scheduler.xy.scale_width = 70;
//     // scheduler.config.icons_select = ["icon_delete"];

//     // if (scheduler._$initialized) {
//     //   return;
//     // }
//     // scheduler.attachEvent("onEventAdded", (id, ev) => {
//     //   console.log("onEventAdded", ev.text);
//     //   newBookingFormRef &&
//     //     newBookingFormRef.current &&
//     //     newBookingFormRef.current.setOpen((open) => !open);
//     // });

//     // scheduler.attachEvent("onEventChanged", (id, ev) => {
//     //   console.log("onEventChanged", ev);
//     // });

//     // scheduler.attachEvent("onEventDeleted", (id, ev) => {
//     //   console.log("onEventDeleted", ev.text);
//     // });

//     // scheduler.attachEvent("onViewChange", function (new_mode, new_date) {
//     //   // console.log("onViewChange", { new_mode, new_date });
//     //   // const date = getDate(new_date);
//     //   // const month = getMonth(new_date);
//     //   // const year = getYear(new_date);
//     //   const date = scheduler.getState().date;
//     //   const minDate = scheduler.getState().min_date;
//     //   const maxDate = scheduler.getState().max_date;

//     //   // scheduler.updateView(new Date(2012,5,3), "day");
//     //   // setCurrentDateRange(new_date);
//     //   // console.log("date", {date, month, year});
//     //   console.log("date", { minDate, date, maxDate });

//     //   customDateRangePickerRef &&
//     //     customDateRangePickerRef.current &&
//     //     customDateRangePickerRef.current.setDateRange([
//     //       {
//     //         startDate: minDate,
//     //         endDate: maxDate,
//     //         key: "selection",
//     //       },
//     //     ]);
//     // });

//     scheduler.locale.labels.matrix_tab = "Matrix";
//     scheduler.locale.labels.section_custom = "Section";
//     scheduler.config.details_on_create = true;
//     scheduler.config.details_on_dblclick = true;
//     scheduler.config.multi_day = true;
//     // brief_mode = true;

//     //===============
//     //Configuration
//     //===============
//     var sections = [
//       { key: 1, label: "Section A" },
//       { key: 2, label: "Section B" },
//       { key: 3, label: "Section C" },
//       { key: 4, label: "Section D" },
//     ];

//     scheduler.createTimelineView({
//       name: "matrix",
//       x_unit: "day",
//       x_date: "%d %M",
//       x_step: 1,
//       x_size: 15,
//       y_unit: sections,
//       y_property: "section_id",
//     });

//     //===============
//     //Customization
//     //===============
//     scheduler.templates.matrix_cell_class = function (evs, x, y) {
//       if (!evs) {
//         var day = x.getDay();
//         return day === 0 || day === 6 ? "yellow_cell" : "white_cell";
//       }
//       if (evs.length < 3) return "green_cell";
//       if (evs.length < 5) return "yellow_cell";
//       return "red_cell";
//     };

//     scheduler.templates.matrix_scalex_class = function (date) {
//       if (date.getDay() === 0 || date.getDay() === 6) return "yellow_cell";
//       return "";
//     };

//     //===============
//     //Data loading
//     //===============
//     scheduler.config.lightbox.sections = [
//       {
//         name: "description",
//         height: 130,
//         map_to: "text",
//         type: "textarea",
//         focus: true,
//       },
//       {
//         name: "custom",
//         height: 23,
//         type: "select",
//         options: sections,
//         map_to: "section_id",
//       },
//       { name: "time", height: 72, type: "time", map_to: "auto" },
//     ];

//     scheduler.init("scheduler_here", new Date(2017, 5, 30), "matrix");

//     console.log("initSchedulerEvents");

//     // scheduler.init(schedulerContainerRef.current, new Date(), "week");
//     // scheduler.parse(schedulerData);
//     // // scheduler.config.hour_date = state ? "%H:%i" : "%g:%i %A";
//     // scheduler.config.hour_date = "%g:%i %A";
//     // scheduler.templates.hour_scale = scheduler.date.date_to_str(
//     //   scheduler.config.hour_date
//     // );
//     // scheduler.setCurrentView();
//     // scheduler._$initialized = false; // to be false to re-render

//     return () => {
//       scheduler.clearAll();
//     };
//   });

//   // console.log("useScheduleController", newBookingFormRef);

//   return [schedulerContainerRef];
// };

// export default useScheduleController;

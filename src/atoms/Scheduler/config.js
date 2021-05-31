const scheduler = window.scheduler;
const sceneA = { key: 1, label: "Scene A - SeaU" };
const sceneB = { key: 2, label: "Scene B - Helsingborg Arena" };
const sceneC = { key: 3, label: "Scene C - City" };
const sceneD = { key: 4, label: "Scene D - Oceanhamnen" };
const sceneE = { key: 5, label: "Scene E - Off-program" };
const sceneF = { key: 6, label: "Scene F - SeaU" };
const sceneG = { key: 7, label: "Scene G - Helsingborg Arena" };
const sceneH = { key: 8, label: "Scene H - City" };
const sceneI = { key: 9, label: "Scene I - Oceanhamnen" };
const sceneJ = { key: 10, label: "Scene J - Off-program" };
const sceneK = { key: 11, label: "Scene K - SeaU" };
const sceneL = { key: 12, label: "Scene L - Helsingborg Arena" };
const sceneM = { key: 13, label: "Scene M - City" };
const sceneN = { key: 14, label: "Scene N - Oceanhamnen" };
const sceneO = { key: 15, label: "Scene O - Off-program" };

const yUnitData = [
  sceneA,
  sceneB,
  sceneC,
  sceneD,
  sceneE,
  sceneF,
  sceneG,
  sceneH,
  sceneI,
  sceneJ,
  sceneK,
  sceneL,
  sceneM,
  sceneN,
  sceneO,
];

const timeline1ViewConfig = {
  name: "timeline1",
  x_unit: "month",
  x_date: "%F, %Y",
  x_step: 1,
  x_size: 1,
  y_unit: yUnitData,
  y_property: "section_id",
  render: "bar",
  event_dy: "full",
};
const timeline2ViewConfig = {
  name: "timeline2",
  x_unit: "day",
  x_date: "%M %d",
  x_step: 1,
  x_size: 7,
  y_unit: yUnitData,
  y_property: "section_id",
  render: "bar",
  event_dy: "full",
};
const timeline3ViewConfig = {
  name: "timeline3",
  x_unit: "hour",
  x_date: "%H:%i",
  x_step: 1,
  x_size: 24,
  x_length: 24,
  y_unit: yUnitData,
  y_property: "section_id",
  render: "bar",
  event_dy: "full",
};
const timeline4ViewConfig = {
  name: "timeline4",
  x_unit: "minute",
  x_date: "%H:%i:%s %A",
  x_step: 15,
  x_size: 4,
  y_unit: yUnitData,
  y_property: "section_id",
  render: "bar",
  scrollable: true,
  event_dy: "full",
  //   second_scale: {
  //     x_unit: "minute",
  //     x_date: "%H:%i",
  //   },
};

export function getSchedulerViews() {
  return [
    timeline1ViewConfig,
    timeline2ViewConfig,
    timeline3ViewConfig,
    timeline4ViewConfig,
  ];
}
const schedulerViews = getSchedulerViews();

scheduler.templates.tooltip_date_format =
  scheduler.date.date_to_str("%Y-%m-%d %H:%i");
scheduler.config.details_on_create = true;
scheduler.config.details_on_dblclick = true;

scheduler.locale.labels.timeline2_tab = "Week";
scheduler.locale.labels.timeline3_tab = "Day";
scheduler.locale.labels.timeline4_tab = "15-Mins";
// scheduler.config.multi_day = true;
// scheduler.config.mark_now = true;
// scheduler.config.now_date = new Date(2021, 4, 27, 11, 42);
// scheduler.xy.menu_width = 0;
// scheduler.attachEvent("onClick",function(){ return false; });
scheduler.config.preserve_scale_length = false;
const format = scheduler.date.date_to_str("%H:%i");

// scheduler.templates.event_bar_text = function (start, end, event) {
//   const startDate = start;
//   const endDate = end;
//   // console.log("event_bar_text", event);
//   return [
//     event.text + "<br />",
//     event.section_id + "<br />",
//     event.aktor + "<br />",
//     "Status:" + event.status + "<br/>",
//     format(startDate) + " - " + format(endDate) + "<br />",
//     // startDate + " - " + endDate,
//   ].join("");
// };
// scheduler.attachEvent("onTemplatesReady", function () {
//   console.log("onTemplatesReady")
scheduler.templates.event_bar_text = function (startDate, endDate, event) {
  return [
    `<div class='event_bar_container'>
      <div class='event_bar_firstrow'>
      <span class='event_bar_tleft'>${event.text}</span>
      <span class='event_bar_tright'>${event.status}</span>
      </div>
      <div class='event_bar_secondrow'>
      <span class='event_bar_aktor_initials'>AB</span>
      <span class='event_bar_bleft'>${event.aktor}</span>
      <span class='event_bar_bright'>${format(startDate)} - ${format(
      endDate
    )}</span>
      </div>
      </div>`,
  ];
};
// });
scheduler.config.separate_short_events = true;

// scheduler.templates.tooltip_text = function (start, end, event) {
//   const html = [];
//   html.push("Booking: <b> </b>");
//   html.push("Room: <b> SCENE-LABEL-TEST</b>");
//   html.push("Check-in: <b>01/01/2021-TEST</b>");
//   html.push("Check-out: <b>01/01/2021-TEST</b>");
//   html.push("PAID-TEST, PAID-TEST");
//   return html.join("<br>");
// };

scheduler.templates.timeline_scale_label = function (key, label, section) {
  return `${key}${label}${section}`;
};

schedulerViews.forEach((view) => scheduler.createTimelineView(view));

export default scheduler;

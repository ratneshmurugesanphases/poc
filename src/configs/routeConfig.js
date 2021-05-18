const routeIds = [
  {
    pageKey: "login",
    routeId: "/",
    displayName: "Log in here!",
    componentName: "LogIn",
    isShown: true,
  },
  {
    pageKey: "overview",
    routeId: "overview",
    displayName: "Overview",
    componentName: "Overview",
    isShown: true,
  },
  {
    pageKey: "calendarview",
    routeId: "calendar-view",
    displayName: "Calendar View",
    componentName: "CalendarView",
    isShown: true,
    subPages: [],
  },
  {
    pageKey: "mondayview",
    routeId: "monday-view",
    displayName: "Monday View",
    componentName: "MondayView",
    isShown: true,
    subPages: [],
  },
  {
    pageKey: "mapview",
    routeId: "map-view",
    displayName: "Map View",
    componentName: "MapView",
    isShown: true,
    subPages: [0, 1, 2, 3],
  },
  {
    pageKey: "printview",
    routeId: "print-view",
    displayName: "Print View",
    componentName: "PrintView",
    isShown: true,
    subPages: [],
  },
];

export default routeIds;

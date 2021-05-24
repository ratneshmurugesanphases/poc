import {
  URL_LOGIN,
  URL_DASHBOARD_VIEW,
  URL_CALENDAR_VIEW,
  URL_MAP_VIEW,
  URL_PRINT_VIEW,
  URL_API_VIEW,
} from "configs/apiConfig";

export const logInRouteObj = {
  pageKey: "login",
  routeId: URL_LOGIN,
  displayName: "Log in here!",
  componentName: "LogIn",
  isShown: true,
};

const routeIds = [
  logInRouteObj,
  {
    pageKey: "dashboard",
    routeId: URL_DASHBOARD_VIEW,
    displayName: "Dashboard",
    componentName: "Dashboard",
    isShown: true,
    subPages: [],
  },
  {
    pageKey: "calendarview",
    routeId: URL_CALENDAR_VIEW,
    displayName: "Calendar View",
    componentName: "CalendarView",
    isShown: true,
    subPages: [],
  },
  {
    pageKey: "mapview",
    routeId: URL_MAP_VIEW,
    displayName: "Map View",
    componentName: "MapView",
    isShown: true,
    subPages: [0, 1, 2, 3],
  },
  {
    pageKey: "printview",
    routeId: URL_PRINT_VIEW,
    displayName: "Print View",
    componentName: "PrintView",
    isShown: true,
    subPages: [],
  },
  {
    pageKey: "apiview",
    routeId: URL_API_VIEW,
    displayName: "Api View",
    componentName: "ApiView",
    isShown: true,
    subPages: [],
  },
];

export default routeIds;

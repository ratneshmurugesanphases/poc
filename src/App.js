import React, { Suspense, lazy } from "react";
import {
  Route,
  Switch,
  BrowserRouter,
  NavLink,
  useParams,
  useRouteMatch,
  Redirect,
} from "react-router-dom";

// import Modal from "pocs/Routing/Modal";
import routes from "configs/routeConfig";
import "./App.scss";

const Overview = lazy(() => import("pages/Overview"));
const LogIn = lazy(() => import("pages/LogIn"));
const CalendarView = lazy(() => import("pages/CalendarView"));
const MondayView = lazy(() => import("pages/MondayView"));
const MapView = lazy(() => import("pages/MapView"));
const PrintView = lazy(() => import("pages/PrintView"));
// const InvalidPage = lazy(() => import("pages/InvalidPage"));

const componentRouteMap = {
  login: <LogIn />,
  overview: <Overview />,
  calendarview: <CalendarView />,
  mondayview: <MondayView />,
  mapview: <MapView />,
  printview: <PrintView />,
};

function PageView() {
  const { viewId } = useParams();
  const { url, path, isExact } = useRouteMatch();
  const pageView = routes.find(({ routeId, isShown }) => {
    return viewId === routeId && isShown;
  });
  const { displayName, pageKey } = pageView || { isShown: false };
  console.log({ isExact, path, url, pageView });
  return pageView ? (
    isExact && (
      <>
        <h1>{displayName}</h1>
        <Route path={`/${viewId}`}>{componentRouteMap[pageKey]}</Route>
      </>
    )
  ) : (
    <Redirect to="/log-in" render={() => componentRouteMap["login"]} />
  );
}

function App() {
  return (
    <Suspense fallback="Loading........">
      <BrowserRouter>
        {routes.map(({ pageKey, routeId, componentName, isShown }) => {
          return (
            isShown && (
              <div key={pageKey}>
                <NavLink to={routeId} activeClassName="activeNavLink">
                  {componentName}
                </NavLink>
              </div>
            )
          );
        })}
        <Switch>
          {routes.map(({ routeId }) => {
            return <Route key={routeId} path="/:viewId" component={PageView} />;
          })}
        </Switch>
        <Redirect to="/log-in" from="*" />
        {/* {<Route path="/contact/:name" children={<Modal />} />} */}
      </BrowserRouter>
    </Suspense>
  );
}
export default App;

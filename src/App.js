import React, { Suspense, lazy } from "react";
import {
  Route,
  Switch,
  BrowserRouter,
  NavLink,
  useParams,
  // useRouteMatch,
  Redirect,
} from "react-router-dom";

import fakeAuth from "helpers/provideFakeAuth";
// import Modal from "pocs/Routing/Modal";
import routes from "configs/routeConfig";
import "monday-ui-react-core/dist/main.css";
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

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        // console.log("PrivateRoute", location);
        return fakeAuth.isAuthenticated === true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

function getMatchedRoute(slug) {
  return routes.find(({ routeId, isShown }) => {
    return slug === routeId && isShown;
  });
}

function PageView() {
  const { viewId } = useParams();
  const matchedRoute = getMatchedRoute(viewId);
  let matchedPath = "/";
  let pageKey = "login";
  // console.log(matchedRoute);
  if (matchedRoute && matchedRoute.pageKey) {
    matchedPath = `/${viewId}`;
    pageKey = matchedRoute.pageKey;
    // console.log({ matchedPath, matchedRoute, viewId });
    return (
      <PrivateRoute>
        <Route path={matchedPath}>{componentRouteMap[pageKey]}</Route>
      </PrivateRoute>
    );
  }
  return <Redirect from="*" to="/" />;
}

function App() {
  return (
    <Suspense fallback="Loading........">
      <BrowserRouter>
        {routes.map(({ pageKey, routeId, componentName, isShown }) => {
          return (
            isShown && (
              <div key={pageKey}>
                <NavLink
                  to={routeId}
                  activeClassName="activeNavLink"
                  exact
                  strict
                >
                  {componentName}
                </NavLink>
              </div>
            )
          );
        })}
        <Switch>
          {routes.map(({ routeId }) => {
            return (
              <Route
                key={routeId}
                path="/:viewId"
                component={PageView}
                exact
                strict
              />
            );
          })}
          <Route path={"/"} exact strict>
            {componentRouteMap["login"]}
          </Route>
        </Switch>
        {/* {<Route path="/contact/:name" children={<Modal />} />} */}
      </BrowserRouter>
    </Suspense>
  );
}
export default App;

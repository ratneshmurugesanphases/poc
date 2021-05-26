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

import { URL_LOGIN, URL_INVALID } from "configs/apiConfig";
import fakeAuth from "helpers/provideFakeAuth";
// import Modal from "pocs/Routing/Modal";
import routes from "configs/routeConfig";
import "monday-ui-react-core/dist/main.css";
import "./App.scss";
// import CalendarView from "pages/CalendarView";

const LogIn = lazy(() => import("pages/LogIn"));
const Dashboard = lazy(() => import("pages/Dashboard"));
const CalendarView = lazy(() => import("pages/CalendarView"));
const MapView = lazy(() => import("pages/MapView"));
const PrintView = lazy(() => import("pages/PrintView"));
const ApiView = lazy(() => import("pages/ApiView"));
const InvalidPage = lazy(() => import("pages/InvalidPage"));

const componentRouteMap = {
  login: <LogIn />,
  dashboard: <Dashboard />,
  calendarview: <CalendarView />,
  mapview: <MapView />,
  printview: <PrintView />,
  apiview: <ApiView />,
  invalid: <InvalidPage />,
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
              pathname: URL_LOGIN,
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
    // console.log("find", { slug, routeId });
    return slug === routeId && isShown;
  });
}

function PageView() {
  const { viewId } = useParams();
  const matchedRoute = getMatchedRoute(`/${viewId}`);
  let matchedPath = URL_LOGIN;
  let pageKey = "login";
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
  return <Redirect to={URL_INVALID} />;
}

function AuthView() {
  const { authType } = useParams();
  // console.log("AuthView", authType);
  if (authType === "login") {
    // console.log("login + logout");
    return <Route path={URL_LOGIN}>{componentRouteMap["login"]}</Route>;
  }
  return <Redirect to={URL_INVALID} />;
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
          <Route path={"/auth/:authType"} exact strict component={AuthView} />
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
          <Redirect from="/" to={URL_LOGIN} exact strict />
          <Route path={"/page/invalid"} exact strict>
            {componentRouteMap["invalid"]}
          </Route>
        </Switch>
        {/* {<Route path="/contact/:name" children={<Modal />} />} */}
      </BrowserRouter>
    </Suspense>
  );
}
export default App;

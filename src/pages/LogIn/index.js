import React from "react";

import fakeAuth from "helpers/provideFakeAuth";
import { Redirect, useLocation } from "react-router-dom";
import { URL_DASHBOARD_VIEW } from "configs/apiConfig";

export default function LogIn() {
  // console.log("LogIn");
  const { state } = useLocation();
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);

  const handleLogInClick = () =>
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });

  // console.log("redirectToReferrer", redirectToReferrer);
  if (redirectToReferrer === true) {
    return <Redirect to={state?.from || URL_DASHBOARD_VIEW} />;
  }

  return fakeAuth.isAuthenticated === true ? (
    <>
      <p>Already Logged in!!</p>
    </>
  ) : (
    <>
      <p>You must log in to view the page</p>
      <button onClick={handleLogInClick}>Log in</button>
    </>
  );
}

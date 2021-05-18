import React from "react";

import fakeAuth from "helpers/provideFakeAuth";
import { Redirect, useLocation } from "react-router-dom";
// import LoginButton from "atoms/LoginButton";

export default function LogIn() {
  const { state } = useLocation();
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
  const handleLogInClick = () =>
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });

  if (redirectToReferrer === true) {
    return <Redirect to={state?.from || "/overview"} />;
  }
  return (
    <>
      <p>You must log in to view the page</p>
      <button onClick={handleLogInClick}>Log in</button>
      {/* Auth0 login */}
      {/* <LoginButton />  */}
    </>
  );
}

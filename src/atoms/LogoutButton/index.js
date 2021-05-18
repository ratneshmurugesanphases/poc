import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import fakeAuth from "helpers/provideFakeAuth";
import { useHistory } from "react-router-dom";

const LogoutButton = () => {
  const history = useHistory();
  // const { logout } = useAuth0();
  // return (
  // <button onClick={() => logout({ returnTo: "http://localhost:3000/log-in" })}>
  //   Log Out
  // </button>
  // );

  return fakeAuth.isAuthenticated === true ? (
    <p style={{ float: "right"}}>
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Log out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
};

export default LogoutButton;

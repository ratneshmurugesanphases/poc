import React from "react";
import { useHistory } from "react-router-dom";

import fakeAuth from "helpers/provideFakeAuth";
import { URL_LOGIN } from "configs/apiConfig";


const LogoutButton = () => {
  const history = useHistory();

  return fakeAuth.isAuthenticated === true ? (
    <p style={{ float: "right"}}>
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push(URL_LOGIN));
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

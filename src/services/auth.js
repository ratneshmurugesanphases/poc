/**
 * Holds auth related to services
 */

import {
  LOGIN,
  REFRESH_TOKEN_TO_ACCESS_TOKEN,
  FORGOT_PASSWORD_API,
  RESET_PASSWORD_API,
  LOGOUT,
  USER_DATA,
} from "constants/urls";
import { postJSON, getJSON } from "lib/http";

let dummyJWT = null;
const isMockingAuth =
  process.env.NODE_ENV === "development" &&
  process.env.REACT_APP_MOCK === "true";

if (isMockingAuth) {
  dummyJWT = {
    access:
      "dummyalgo.eyJmaXJzdG5hbWUiOiJNb2NrIEFkbWluIiwibGFzdE5hbWUiOiIiLCJpZCI6MTAwMDF9.dumyhash",
    refresh:
      "eyJmaXJzdG5hbWUiOiJNb2NrIEFkbWluIiwibGFzdE5hbWUiOiIiLCJpZCI6MTAwMDF9",
  };
}

/**
 * makes a network call and updates the context(if one is provided)
 * On development, entering the email as `admin@galepartners.com` logs you in with dummy data
 */
export async function performLogin(data, userContext = null) {
  if (isMockingAuth) {
    const MOCK_EMAIL = "admin@galepartners.com";
    if (data.username === MOCK_EMAIL) {
      delete data.password;
      userContext.updateUserData(dummyJWT);
      return { status: "Success" };
    }
  }

  const res = await postJSON(LOGIN, data);
  return {
    status: userContext.login(res) ? "Success" : "Failure",
  };
}

/**
 * Get Access token from refresh token
 */
export function getAccessTokenFromRefreshToken(refreshToken) {
  if (isMockingAuth) {
    return dummyJWT;
  }
  return postJSON(REFRESH_TOKEN_TO_ACCESS_TOKEN, {
    refresh: refreshToken,
  });
}

/**
 * Perform Forgot password
 */
export function performForgotPassword(data) {
  return postJSON(FORGOT_PASSWORD_API, data);
}

/**
 * Perform Reset password
 */
export function performResetPassword(data) {
  return postJSON(RESET_PASSWORD_API, data);
}

/**
 * Perform Logout
 */
export function performLogout(data) {
  return postJSON(LOGOUT, data);
}

export function getUserData() {
  return getJSON(USER_DATA);
}

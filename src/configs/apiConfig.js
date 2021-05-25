/* APP URLs */
export const LOCAL_HOST = window.location.origin;
export const PROD_HOST = ``;

// export const URL_BASE = LOCAL_HOST;
export const URL_AUTH = `/auth`;

export const URL_LOGIN = `${URL_AUTH}/login`;
export const URL_LOGOUT = `${URL_AUTH}/logout`;

export const URL_DASHBOARD_VIEW = `/dashboard`;
export const URL_CALENDAR_VIEW = `/calendar-view`;
export const URL_MAP_VIEW = `/map-view`;
export const URL_PRINT_VIEW = `/print-view`;
export const URL_API_VIEW = `/api-view`;
export const URL_INVALID = `/page/invalid`;

/* APP API URLs */
// export const MOCK_HOST = `https://jsonplaceholder.typicode.com/`;
export const MOCK_HOST = `http://localhost:5000/`;


export const API_LOCAL_HOST = `${LOCAL_HOST}/api/`;
export const API_AUTH = `${API_LOCAL_HOST}/api/auth/`;
export const API_BASE_V1 = `${API_LOCAL_HOST}/api/v1/`;

export const INVITE_GUSER = `${API_BASE_V1}/invite-guser`;
export const SAVE_BOOKING = `${API_BASE_V1}/save-booking`;
export const UPDATE_BOOKING = `${API_BASE_V1}/update-booking`;

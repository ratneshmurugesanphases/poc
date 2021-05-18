import { isFakeAuthEnabled } from "configs/baseConfig";
const fakeAuth = {
  isAuthenticated: isFakeAuthEnabled,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 200); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 200); // fake async
  },
};

export default fakeAuth;

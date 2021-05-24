const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    console.log("fakeAuth true");
    this.isAuthenticated = true;
    setTimeout(cb, 200); // fake async
  },
  signout(cb) {
    console.log("fakeAuth false");
    this.isAuthenticated = false;
    setTimeout(cb, 200); // fake async
  },
};

export default fakeAuth;

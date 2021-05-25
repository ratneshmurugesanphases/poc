module.exports = (app) => {
  const controller = require("./controller.js");

  app.route("/ping").get(controller.ping);
  app.route("/login").get(controller.getMethod).post(controller.postMethod);
};

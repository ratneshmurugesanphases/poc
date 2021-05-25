const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//import routes
const routes = require("./routes.js");

//register the route
routes(app);

app.listen(port, () => {
  console.log(`RESTful API server running on ${port}`);
});

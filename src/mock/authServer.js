const express = require("express");
const cors = require("cors");
const router = express.Router();
// const jwt = require("jsonwebtoken");

const app = express();
require("dotenv").config();

// const generateAccessToken = (user) => {
//   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30s" });
// };

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  // ...
  // Suppose the user authentication is already done

  const username = req.body.username;
  const user = { name: username };
  console.log("req.body", req.body);
  //   const accessToken = generateAccessToken(user);
  //   res.json({ accessToken: accessToken });
  res.json(user);
});

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

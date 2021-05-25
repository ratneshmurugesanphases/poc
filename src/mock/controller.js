const jwt = require("jsonwebtoken");

const articles = [
  {
    id: 1,
    name: "Arnold Swag",
    title: 'First Article',
  },
  {
    id: 2,
    name: "John Doe",
    title: 'Second Article',
  },
  {
    id: 3,
    name: "Don Joe",
    title: 'Third Article',
  },
];

exports.ping = (req, res) => {
  res.send("pong");
};

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30s" });
};

exports.postMethod = (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  const accessToken = generateAccessToken(user);
  res.json({ user, accessToken: accessToken });
};

exports.getMethod = (req, res) => {
  const authHeader = req.headers['Authorization'];
  console.log("authHeader", authHeader);

  res.json({ method: "GET" });
};

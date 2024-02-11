import express from "express";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";

const app = express();
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    const token = jwt.sign({ username }, "secret    ");
    res.json({ token });
  }
  res.status(401).send();
});

function authenticationMiddleware(req, res, next) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, "secret");
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).send();
  }
}

app.get("/data", authenticationMiddleware, (req, res) => {
  res.json({ data: "data" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

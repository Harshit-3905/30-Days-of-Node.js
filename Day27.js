import express from "express";
import jwt from "jsonwebtoken";

const app = express();

function authenticateAndAuthorize(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, "your_secret_key");
    if (decoded.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Unauthorized: Insufficient privileges" });
    }
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

app.get("/admin-route", authenticateAndAuthorize, (req, res) => {
  res.send("Admin Route");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

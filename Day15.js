import express from "express";

const app = express();

function loggingMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
  console.log("Headers :");
  Object.entries(req.headers).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  console.log("Body :");
  console.log(req.body);
  next();
}

app.use(loggingMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

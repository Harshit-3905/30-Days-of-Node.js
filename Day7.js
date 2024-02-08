import express from "express";
const app = express();

function requestLoggerMiddleware(req, res, next) {
  console.log(Date.now(), req.method);
  next();
}

app.use(requestLoggerMiddleware);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

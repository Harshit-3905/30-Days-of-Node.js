import express from "express";
const app = express();

const cache = {};

function cachingMiddleware(req, res, next) {
  const url = req.url;
  const cachedData = cache[url];
  if (cachedData) {
    const { data, expiration } = cachedData;
    if (expiration > Date.now()) {
      res.send(data);
      return;
    }
  } else {
    delete cache[url];
  }
  next();
}

app.use(cachingMiddleware);

app.get("/data", (req, res) => {
  const data = "Some data";
  const expiration = Date.now() + 1000 * 60 * 60;
  cache[req.url] = { data, expiration };
  res.send(data);
});

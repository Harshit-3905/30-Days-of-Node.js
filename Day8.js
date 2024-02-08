import express from "express";
const app = express();

function positiveIntegerHandler(req, res, next) {
  const { number } = req.query;
  if (number < 0) {
    console.log(req.query.number, "Failed");
    res.status(400).send("Negative Number");
  } else next();
}

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/positive", positiveIntegerHandler, (req, res) => {
  console.log(req.query.number, "Success");
  res.send("Success");
});

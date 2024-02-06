import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
app.get("/greet", greetHandler);

function greetHandler(req, res) {
  const name = req.query.name;
  res.send(`Hello ${name}`);
}

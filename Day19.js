import express from "express";
import mongoose from "mongoose";
import User from "../30-Days-of-Node.js/Day17/user.model.js";

const app = express();

mongoose.connect(
  "mongodb+srv://temp:temp@cluster0.pmenxcl.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

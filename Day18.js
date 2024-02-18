const express = require("express");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
const User = mongoose.model("User", UserSchema);

mongoose.connect("mongodb://localhost:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const app = express();
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.send(err);
  }
});
const port = process.env.PORT || 3000;
app.listen(port);

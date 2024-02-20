import express from "express";
import mongoose from "mongoose";
import User from "./models/user";

const app = express();

mongoose.connect("mongodb://localhost/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/average-age", async (req, res) => {
  try {
    const averageAge = await User.aggregate([
      {
        $group: {
          _id: null,
          averageAge: { $avg: "$age" },
        },
      },
    ]);
    const result = averageAge.length > 0 ? averageAge[0].averageAge : 0;

    res.json({ averageAge: result });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));

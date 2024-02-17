import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

async function connectToMongoDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://temp:temp@cluster0.pmenxcl.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function () {
      console.log("Connected to DB");
    });
  } catch (error) {
    console.error("Failed to connect to DB", error);
  }
}

connectToMongoDB();

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default connectToMongoDB;

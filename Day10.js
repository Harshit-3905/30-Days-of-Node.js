import express from "express";
import fs from "fs";

function staticFileServer(req, res) {
  const { url } = req;
  const filePath = url === "/" ? "/index.html" : url;
  const file = fs.readFileSync(`./public${filePath}`);
  res.end(file);
}

const app = express();
app.use(staticFileServer);
app.listen(3000, () => console.log("Server is running on port 3000"));

import webSocket from "websocket";
import express from "express";

const app = express();

function setupWebSocket(server) {
  const wss = new webSocket.Server({ server });
  wss.on("connection", (ws) => {
    ws.on("message", (message) => {
      console.log("received: %s", message);
      ws.send(message);
    });
  });
}

const server = app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});

setupWebSocket(server);

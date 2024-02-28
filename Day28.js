import express from "express";
import http from "http";
import WebSocket from "ws";

const app = express();

function setupWebSocketServer(server) {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.on("message", (message) => {
      console.log(`Received message: ${message}`);

      // Broadcast the received message to all connected clients
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    });

    ws.on("close", () => {
      console.log("Client disconnected");
    });
  });
}
const server = http.createServer(app);
setupWebSocketServer(server);

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

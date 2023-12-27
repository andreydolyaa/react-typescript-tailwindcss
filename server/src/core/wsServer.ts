import https from "https";
import http from "http";
import * as WebSocket from "ws";
import { v4 as uuidv4 } from "uuid";
import {
  handleDeviceConnectionState,
  handleIncomingMessage,
} from "../controllers/deviceMessagesHandler";

interface Sessions {
  [sessionId: string]: WebSocket;
}

interface CustomWebSocket extends WebSocket {
  sessionId?: string;
}

class wsServer {
  wss: WebSocket.Server;
  sessions: Sessions;

  constructor(server: https.Server) {
    this.wss = new WebSocket.Server({ server, path: "/ws" });
    this.sessions = {};
    this.setup();
  }

  setup() {
    console.log("websocket server started");

    this.wss.on("connection", (socket: WebSocket, request) => {
      this.initClient(socket);
      socket.on("message", (message) => this.onmessage(message, socket));
      socket.on("error", this.onerror);
      socket.on("close", () => this.onclose(socket));
    });
  }
  onmessage(message: any, socket: CustomWebSocket) {
    if (!socket.sessionId) {
      return;
    }
    const msg = JSON.parse(message);
    msg.sessionId = socket.sessionId;
    handleIncomingMessage(msg);
  }
  onerror(error: string) {
    console.log(error, "ERROR %%%");
  }
  onclose(socket: CustomWebSocket) {
    if (socket.sessionId) {
      handleDeviceConnectionState(socket.sessionId);
      delete this.sessions[socket.sessionId];
      console.log(`client disconnected [${socket.sessionId}]`);
    }
  }

  initClient(socket: CustomWebSocket) {
    const sessionId = uuidv4();
    const msg = { type: "init", sessionId };
    this.sessions[sessionId] = socket;
    socket.sessionId = sessionId;
    socket.send(JSON.stringify(msg));
  }
}

export default wsServer;

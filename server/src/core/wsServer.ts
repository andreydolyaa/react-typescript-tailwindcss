import https from "https";
import http, { IncomingMessage } from "http";
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
  uiSession: WebSocket | null;

  constructor(server: https.Server) {
    this.wss = new WebSocket.Server({ server, path: "/ws" });
    this.sessions = {};
    this.uiSession = null;
    this.setup();
  }

  setup() {
    this.wss.on("connection", (socket: WebSocket, request: IncomingMessage) => {
      const isUi = this.isUi(request);
      if (isUi) {
        this.uiSession = socket;
      } else {
        this.initClient(socket);
      }
      socket.on("message", (message) => this.onmessage(message, socket));
      socket.on("error", this.onerror);
      socket.on("close", () => this.onclose(socket, isUi));
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
  onclose(socket: CustomWebSocket, isUi: boolean) {
    if (isUi) {
      this.uiSession = null;
      console.log("ui disconnected");
    } else if (socket.sessionId) {
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
  isUi(request: IncomingMessage): boolean {
    const urlParams = new URLSearchParams(request.url?.split("?")[1]);
    const param = urlParams.get("identifier");
    return param === "UI";
  }
  send(message: any) {
    this.uiSession?.send(JSON.stringify({ type: "DEVICE_UPDATE", message }));
  }
}

export default wsServer;

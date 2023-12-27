import https from "https";
import * as WebSocket from "ws";
import { v4 as uuidv4 } from "uuid";
import { handleIncomingMessage } from "../controllers/deviceMessagesHandler";

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
      socket.on("message", this.onmessage);
      socket.on("error", this.onerror);
      socket.on("close", () => this.onclose(socket));
    });
  }
  onmessage(message: any) {
    const msg = JSON.parse(message);
    handleIncomingMessage(msg);
  }
  onerror(error: string) {
    console.log(error, "ERROR %%%");
  }
  onclose(socket: CustomWebSocket) {
    console.log(socket.sessionId, "&&&&&&&&&&&&&&&&&&&");
    console.log("connection closed");
  }

  initClient(socket: CustomWebSocket) {
    const sessionId = uuidv4();
    // this.sessions[sessionId] = socket;
    const msg = { type: "init" };
    socket.sessionId = sessionId;
    socket.send(JSON.stringify(msg));
  }
}

export default wsServer;

import WebSocket from "ws";
// import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import {
  wsMessageTypes as action,
  commandCenterMessageTypes as center,
} from "../constants/constants.js";
import Session from "../session/session.js";
import Device from "../device/device.js";
import { sleep } from "../utils/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class WebSocketClient {
  constructor(url) {
    this.url = url;
    this.webSocketClient = null;
    this.attempts = 0;
    this.reconnectTime = 3000;
    this.updatesInterval = null;
    this.updateEvery = 2000;
    this.handleIncomingMessage = this.handleIncomingMessage.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleConnectionClose = this.handleConnectionClose.bind(this);
    this.setupWebsocket();
  }
  setupWebsocket() {
    this.webSocketClient = new WebSocket(this.url, {
      // key: readFileSync(new URL("../../certs/emr.test.key", import.meta.url)),
      // cert: readFileSync(new URL("../../certs/emr.test.crt", import.meta.url)),
      rejectUnauthorized: false, // TODO: remove in production
    });
    this.setupEventListeners();
  }
  setupEventListeners() {
    this.webSocketClient.on(action.OPEN, this.handleConnectionOpen);
    this.webSocketClient.on(action.CLOSE, this.handleConnectionClose);
    this.webSocketClient.on(action.MESSAGE, this.handleIncomingMessage);
    this.webSocketClient.on(action.ERROR, this.handleError);
  }
  handleConnectionOpen() {
    this.attempts = 0;
    console.log("Websocket connection opened to: ", this.url);
  }
  handleConnectionClose() {
    console.log("Websocket connection closed from: ", this.url);
    clearInterval(this.updatesInterval);
    this.reconnect();
  }
  handleError(error) {
    console.log(error);
    console.log("Websocket connection failed: ", error.code);
  }
  async reconnect() {
    this.attempts++;
    console.log(`Trying to reconnect to... ${this.url} [Attempt ${this.attempts}]`);
    await sleep(this.reconnectTime);
    this.setupWebsocket();
  }
  handleIncomingMessage(data) {
    const message = JSON.parse(data);
    if (message.type === "init") {
      this.sendInitMessage();
      this.sendDeviceUpdates();
    }
    // if (message.type === action.ERROR) {
    //   console.log(message.message);
    // } else if (message.type === action.SESSION) {
    //   Session.store = message.sessionId;
    // } else if (message.type === action.MESSAGE) {
    //   console.log(message);
    // }
  }
  send(message) {
    if (this.webSocketClient.readyState === WebSocket.OPEN) {
      this.webSocketClient.send(message);
    } else {
      console.error("Websocket connection not ready");
    }
  }
  sendInitMessage() {
    this.send(
      JSON.stringify({
        type: center.INITIAL_CONNECTION,
        deviceIdentifier: Device.deviceIdentifier,
        osVersion: Device.osVersion,
        userInfo: Device.userInfo,
        upTime: Device.upTime,
        totalMemory: Device.totalMemory,
        freeMemory: Device.freeMemory,
        osRelease: Device.osRelease,
        architecture: Device.architecture,
        hostName: Device.hostName,
        homeDir: Device.homeDir,
        networkInterfaces: Device.networkInterfaces,
        cpus: Device.cpus,
        cpuUsage: Device.cpuUsage,
        nodeProcessUpTime: Device.nodeProcessUpTime,
        ipAddress: Device.ipAddress,
        systemLoad: Device.systemLoad,
        cpuUsageCalculated: Device.cpuUsageCalculated,
        connected: true,
        sessionId: Session.retrieve,
      })
    );
  }
  sendDeviceUpdates() {
    this.updatesInterval = setInterval(() => {
      this.send(
        JSON.stringify({
          type: center.UPDATE_MESSAGE,
          deviceIdentifier: Device.deviceIdentifier,
          upTime: Device.upTime,
          freeMemory: Device.freeMemory,
          cpus: Device.cpus,
          networkInterfaces: Device.networkInterfaces,
          cpuUsage: Device.cpuUsage,
          nodeProcessUpTime: Device.nodeProcessUpTime,
          systemLoad: Device.systemLoad,
          cpuUsageCalculated: Device.cpuUsageCalculated,
          sessionId: Session.retrieve,
        })
      );
    }, this.updateEvery);
  }
}

export default WebSocketClient;

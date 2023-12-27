import { Middleware } from "redux";
import { WS_URL } from "../../baseUrl";
import store from "../store";
import { deviceUpdate } from "../../features/devices/devicesSlice";

const createWebsocketMiddleware = (): Middleware => {
  let socket: WebSocket | null = null;

  return (store) => (next: any) => (action: any) => {
    switch (action.type) {
      case "WEBSOCKET_CONNECT":
        if (!socket) {
          socket = new WebSocket(`${WS_URL}?identifier=UI`);

          socket.onopen = () => {
            console.log("Connection opened");
          };

          socket.onmessage = (message: MessageEvent<any>) => {
            const data = JSON.parse(message.data);
            if (data.type === "DEVICE_UPDATE") {
              store.dispatch(deviceUpdate(data.message));
            }
          };

          socket.onclose = () => {
            console.log("Socket closed");
          };
        }
        break;

      case "WEBSOCKET_DISCONNECT":
        socket?.close();
        break;

      case "WEBSOCKET_SEND":
        if (socket && socket.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify(action.payload));
        }
        break;

      default:
        break;
    }

    return next(action);
  };
};

export default createWebsocketMiddleware;

// import { MiddlewareAPI } from "@reduxjs/toolkit";
// import {
//   connectWebSocket,
//   disconnectWebSocket,
//   sendWebSocketMessage,
// } from "../../features/websocket/websocketSlice";

// export const websocketMiddleware =
//   (store: MiddlewareAPI) => (next: any) => (action: any) => {
//     switch (action.type) {
//       case connectWebSocket.type:
//         store.dispatch(connectWebSocket());
//         break;

//       case sendWebSocketMessage.type:
//         store.dispatch(sendWebSocketMessage(action.payload));
//         break;

//       case disconnectWebSocket.type:
//         store.dispatch(disconnectWebSocket());
//         break;

//       default:
//         break;
//     }
//     return next(action);
//   };

// export default websocketMiddleware;

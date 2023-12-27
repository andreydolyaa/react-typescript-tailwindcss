// websocketSlice.js
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface WebSocketState {
  connection: WebSocket | null;
  isConnected: Boolean;
}

const initialState: WebSocketState = {
  connection: null,
  isConnected: false,
};

const websocketSlice = createSlice({
  name: "websocket",
  initialState,
  reducers: {
    setConnection: (state, action: PayloadAction<WebSocket>) => {
      state.connection = action.payload;
      state.isConnected = true;
    },
    closeConnection: (state) => {
      if (state.connection) {
        state.connection.close();
      }
      state.connection = null;
      state.isConnected = false;
    },
    sendMessage(state, action: PayloadAction<string>) {
      if (state.connection && state.isConnected) {
        state.connection.send(action.payload);
      }
    },
  },
});

export const { setConnection, closeConnection, sendMessage } = websocketSlice.actions;
export const selectWebSocket = (state: { websocket: WebSocketState }) => state.websocket;
export default websocketSlice.reducer;

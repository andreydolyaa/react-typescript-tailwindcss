import { configureStore, Tuple } from "@reduxjs/toolkit";
import devicesReducer from "../features/devices/devicesSlice";
import websocketReducer from "../features/websocket/websocketSlice";
// import websocketMiddleware from "./middleware/websocketMiddleware";

const store = configureStore({
  reducer: {
    devices: devicesReducer,
    websocket: websocketReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({ serializableCheck: false }),
  // // middleware: () => new Tuple(websocketMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

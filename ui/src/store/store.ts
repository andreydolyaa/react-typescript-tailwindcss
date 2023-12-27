import { configureStore, Middleware } from "@reduxjs/toolkit";
import devicesReducer from "../features/devices/devicesSlice";
import createWebsocketMiddleware from "./middleware/websocketMiddleware";

const middleware: Middleware[] = [createWebsocketMiddleware()];

const store = configureStore({
  reducer: {
    devices: devicesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

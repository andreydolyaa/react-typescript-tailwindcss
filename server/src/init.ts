import dotenv from "dotenv";
import Server from "./core/server";
import router from "./router";


dotenv.config();

export const server = new Server({
  port: process.env.PORT || 8000,
  router,
});

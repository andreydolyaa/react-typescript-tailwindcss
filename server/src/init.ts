import dotenv from "dotenv";
import Server from "./core/server";
import router from "./router";

dotenv.config();

export const server = new Server({
  host: process.env.HOST as string,
  port: Number(process.env.PORT),
  router,
});

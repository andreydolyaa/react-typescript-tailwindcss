import https from "https";
import fs from "fs";

import path from "path";
import { fileURLToPath } from "url";
import express, { Application, Router } from "express";
import cors from "cors";
import wsServer from "./wsServer";

interface ServerOptions {
  host: string;
  port: number;
  router: Router;
}

class Server {
  app: Application;
  router: Router;
  port: number;
  host: string;
  httpsSettings: object;
  __filename: string;
  server: https.Server;
  wsServer: wsServer;

  constructor(options: ServerOptions) {
    this.port = options.port;
    this.host = options.host;
    this.router = options.router;
    this.app = express();
    this.__filename = __filename;
    this.httpsSettings = {
      key: fs.readFileSync(path.join(__dirname, "../../certs/emr.test.key")),
      cert: fs.readFileSync(path.join(__dirname, "../../certs/emr.test.crt")),
    };
    this.server = https.createServer(this.httpsSettings, this.app);
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(this.router);
    this.wsServer = new wsServer(this.server);
  }

  async start() {
    try {
      this.server.listen(this.port, this.host, () =>
        console.log("server started: ", this.port)
      );
    } catch (error) {
      throw error;
    }
  }
  send(message: any) {
    this.wsServer.send(message);
  }
}

export default Server;

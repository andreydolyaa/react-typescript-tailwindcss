import express, { Application, Router } from "express";
import cors from "cors";

interface ServerOptions {
  port: number | string;
  router: Router;
}

class Server {
  app: Application;
  router: Router;
  port: number | string;

  constructor(options: ServerOptions) {
    this.port = options.port;
    this.router = options.router;
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(this.router);
  }
  async start() {
    try {
      this.app.listen(this.port, () =>
        console.log("server started: ", this.port)
      );
    } catch (error) {
      throw error;
    }
  }
}

export default Server;

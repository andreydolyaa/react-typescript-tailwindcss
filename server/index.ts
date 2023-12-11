import { server } from "./src/init";
import Database from "./src/core/database";

server.start()
  .then(Database.connect);

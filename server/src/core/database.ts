import mongoose from "mongoose";
import { sleep } from "../utils/utils";

class Database {
  static async connect(): Promise<void> {
    const uri: string = Database.constructUri();
    console.log("connecting to db...");
    try {
      await mongoose.connect(uri);
      console.log("db connected");
    } catch (error) {
      console.log("Failed to connect to db. retrying...");
      await sleep(2000);
      Database.connect();
    }
  }
  static constructUri(): string {
    const host: string = process.env.MONGO_HOST || "localhost";
    const port: string | number = process.env.MONGO_PORT || 5005;
    const name: string = process.env.DB_NAME || "";
    const protocol: string = "mongodb";
    return protocol + "://" + host + ":" + port + "/" + name;
  }
}

export default Database;

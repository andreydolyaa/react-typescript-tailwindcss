"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const utils_1 = require("../utils/utils");
class Database {
    static connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = Database.constructUri();
            console.log("connecting to db...");
            try {
                yield mongoose_1.default.connect(uri);
                console.log("db connected");
            }
            catch (error) {
                console.log("Failed to connect to db. retrying...");
                yield (0, utils_1.sleep)(2000);
                Database.connect();
            }
        });
    }
    static constructUri() {
        const host = process.env.MONGO_HOST || "localhost";
        const port = process.env.MONGO_PORT || 5005;
        const name = process.env.DB_NAME || "";
        const protocol = "mongodb";
        return protocol + "://" + host + ":" + port + "/" + name;
    }
}
exports.default = Database;

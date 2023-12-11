"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const init_1 = require("./src/init");
const database_1 = __importDefault(require("./src/core/database"));
init_1.server.start()
    .then(database_1.default.connect);

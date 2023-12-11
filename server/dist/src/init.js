"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./core/server"));
const router_1 = __importDefault(require("./router"));
dotenv_1.default.config();
exports.server = new server_1.default({
    port: process.env.PORT || 8000,
    router: router_1.default,
});

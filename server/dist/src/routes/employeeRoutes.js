"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeeController_1 = require("../controllers/employeeController");
const router = express_1.default.Router();
router
    .route("/employee")
    .get(employeeController_1.getEmployees)
    .post(employeeController_1.addEmployee)
    .delete(employeeController_1.deleteEmployee);
exports.default = router;

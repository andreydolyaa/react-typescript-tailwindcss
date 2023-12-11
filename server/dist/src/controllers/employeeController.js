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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.addEmployee = exports.getEmployees = void 0;
const employeeModel_1 = require("../models/employeeModel");
const getEmployees = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield employeeModel_1.Employee.find({});
        res.status(200).send(data);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getEmployees = getEmployees;
const addEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield employeeModel_1.Employee.create(Object.assign({}, req.body));
        res.status(201).send(employee);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.addEmployee = addEmployee;
const deleteEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield employeeModel_1.Employee.findOneAndDelete({ id: req.params.id });
        res.status(200).send(employee);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.deleteEmployee = deleteEmployee;

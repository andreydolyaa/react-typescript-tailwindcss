import { HydratedDocument } from "mongoose";
import { Employee } from "../models/employeeModel";
import { Controller } from "../types/types";
import { IEmployee } from "../models/employeeModel";
import { sleep } from "../utils/utils";

export const getEmployees: Controller = async (req, res, next) => {
  try {
    const data: IEmployee[] = await Employee.find({});
    // await sleep(2000);
    // throw new Error()
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const addEmployee: Controller = async (req, res, next) => {
  try {
    const employee: HydratedDocument<IEmployee> = await Employee.create({
      ...req.body,
    });
    res.status(201).send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteEmployee: Controller = async (req, res, next) => {
  try {
    const employee = await Employee.findOneAndDelete({ id: req.params.id });
    res.status(200).send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
};

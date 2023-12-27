import express, { Router } from "express";
import { getDevices } from "../controllers/deviceController";

const router: Router = express.Router();

router
  .route("/devices")
  .get(getDevices)
  // .post(addEmployee)
  // .delete(deleteEmployee);

export default router;

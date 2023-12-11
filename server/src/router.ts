import express from "express";
import employeeRoutes from "./routes/employeeRoutes";

const router = express.Router();

router.use("/api", employeeRoutes);

export default router;

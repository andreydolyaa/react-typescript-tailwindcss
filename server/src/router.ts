import express from "express";
import deviceRoutes from "./routes/deviceRoutes";

const router = express.Router();

router.use("/api", deviceRoutes);

export default router;

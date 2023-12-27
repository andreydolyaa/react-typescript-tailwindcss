import express from "express";
import dotenv from "dotenv";
import "./initWs.js";

dotenv.config();
// TODO:
const app = express();
const PORT = process.env.PORT || 8888;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

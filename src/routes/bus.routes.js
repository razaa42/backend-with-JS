import express from "express"
import { createBus, getBuses } from "../controllers/bus.controller.js"

const router = express.Router();
router.post("/",createBus);
router.get("/",getBuses)

export default router
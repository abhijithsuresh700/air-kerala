import express from "express";

import { createSeat, getSeat } from "../controllers/seatController.js";

const router = express.Router();

router.post("/:id", createSeat);
router.get("/:id", getSeat);

export default router
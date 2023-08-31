import express from "express";

import { createFlight, getFlightRoutes, getFlightSeats } from "../controllers/flightController.js";

const router = express.Router();

router.post("/", createFlight);
router.get("/flightRoutes", getFlightRoutes);
router.get("/seat/:id", getFlightSeats);

export default router
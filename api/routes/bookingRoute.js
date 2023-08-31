import express from "express";
import { bookSeat, userBookings } from "../controllers/bookingController.js";
const router = express.Router();

router.post("/", bookSeat);
router.get("/:id", userBookings);

export default router;

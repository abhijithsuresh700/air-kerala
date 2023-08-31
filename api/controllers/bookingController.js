import Booking from "../models/bookingModel.js";

export const bookSeat = async (req, res) => {
    console.log(req.body, "body check at booking");
    const newBooking = new Booking(req.body);
    try {
      const savedBooking = await newBooking.save();
      res.status(200).json(savedBooking);
      console.log(savedBooking, "saved booking");
    } catch (error) {
      next(error);
    }
  };

  export const userBookings = async (req, res, next) => {
    console.log(req.params.id, "params.id check at booking");
    try {
      const bookings = await Booking.find({user:req.params.id}).populate({
          path: "flight",
          select: "name from to"
      }).populate({
        path: "user",
        select: "name userName email phone",
      }).exec();
       console.log(bookings, "my bookings");
      res.json(bookings)
    } catch (error) {
      next(error);
    }
  };
import Flight from "../models/flightModel.js";
import Seat from "../models/seatModel.js";

export const createFlight = async(req,res,next)=>{
    const newFlight = new Flight(req.body)
    try {
      const savedFlight =  await newFlight.save();
      console.log(savedFlight)
      res.status(200).json(savedFlight)
    } catch (error) {
        next(error);
    }
}

export const getFlightRoutes = async(req,res,next)=>{
    try {
      const { from, to } = req.query;
      if(from && to) {
          const routes =  await Flight.find({ from, to });
          console.log(routes, "routesssss")
          res.status(200).json(routes)
        }else{
            res.status(200).send("No Flight in this Route")
        }
    } catch (error) {
        next(error);
    }
}

export const getFlightSeats = async (req, res, next) => {
    try {
      const flight = await Flight.findById(req.params.id);
      console.log(flight, "flight checkkk");
  
      const seats = await Seat.find({ _id: { $in: flight.seats } });
  
      console.log(seats, "seats checkkkk");
      res.status(200).json(seats);
    } catch (err) {
      next(err);
    }
  };

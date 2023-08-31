import Seat from "../models/seatModel.js";
import Flight from "../models/flightModel.js";


export const createSeat = async(req,res,next)=>{
    const flightId = req.params.id;
    const newSeat = new Seat(req.body)
    try {
        const savedSeat = await newSeat.save();
        try {
           await Flight.findByIdAndUpdate(flightId, {$push : {seats: savedSeat._id}})
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedSeat)
    } catch (error) {
        next(error)
    }
}

export const getAllSeats = async(req,res,next)=>{
    try {
        const seat =  await Seat.find()
      res.status(200).json(seat)
    } catch (error) {
        next(error);
    }
}

export const getSeat = async(req,res,next)=>{
    console.log('====================================');
    console.log(req.params.id,"id checkkkkkkkk");
    console.log('====================================');
    try {
        const seat = await Seat.findById(req.params.id)
      res.status(200).json(seat)
    } catch (error) {
        next(error);
    }
}
import mongoose from 'mongoose';
import User from './userModel.js';
import Flight from "./flightModel.js";
import Seat from "./seatModel.js";
const { Schema } = mongoose;

const BookingSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      flight: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight', 
        required: true,
      },
      seat: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seat', 
        required: true,
      }],
      date:{
        type: Date,
        required: true,
      },
      status:{
        type: String,
        default:"active"
      }

},{timestamps: true});

export default mongoose.model("Booking", BookingSchema)
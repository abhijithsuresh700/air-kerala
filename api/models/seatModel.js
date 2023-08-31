import mongoose from 'mongoose';
const { Schema } = mongoose;

const SeatSchema = new Schema({
    seatNumbers:[{number: Number, unavailableDates: { type: [Date]}}],
},
{timeStamps: true}
);

export default mongoose.model("Seat", SeatSchema)
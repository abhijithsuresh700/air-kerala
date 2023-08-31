import mongoose from 'mongoose';
const { Schema } = mongoose;

const FlightSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    from:{
        type: String,
        required: true,
    },
    to:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    seats:{
        type: [String],
    },
    price:{
        type: Number,
        required: true,
    },
});

export default mongoose.model("Flight", FlightSchema)
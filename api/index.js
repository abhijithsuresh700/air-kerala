import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js"
import flightRoute from "./routes/flightRoute.js"
import seatRoute from "./routes/seatRoute.js"
import bookingRoute from "./routes/bookingRoute.js"

const app = express()
dotenv.config();


//MIDDLEWARES
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute)
app.use("/api/flight", flightRoute)
app.use("/api/seat", seatRoute)
app.use("/api/booking", bookingRoute)


app.get('/', async (req, res) => {
    res.status(200).send({
      message: 'Hello from air kerala!'
    })
  })
  


const connect =async()=>{
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("An error occured at the database connection")
        throw error;
    }    
}

app.listen(4000,()=>{
    connect();
    console.log("Server is running on port 4000");
})
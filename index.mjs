import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

const app = express();

///----- Router -----///
import router from './api/index.mjs';




///---- Database Connection ----///
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log(`Connected to MongoDB`)
    }
    catch (err) {
        throw err
    }
}
connect();
mongoose.connection.on("disconnected", () => {
    console.log('MongoDB is disconnected!')
})


///----- Middleware -----///
app.use(cookieParser()); 
app.use(express.json());//Body Parser



app.use(router);



//----err Handling Middleware----//
app.use((err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMsg = err.message || "Something went wrong!";
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: err.stack
    });
})


app.listen(process.env.PORT, () => {
    console.log(`Connected to Backend at PORT: ${process.env.PORT}`)
})
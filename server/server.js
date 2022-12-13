import express from "express";

//db and authenticate user

import connectDB from "./db/connect.js";

//routers

 import authRouter from "./routes/authRoutes.js";
 import jobsRouter from './routes/jobsRoutes.js';
//middlewares
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-Found.js";


import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

//notFoundMiddleware


app.get("/", (req, res) => {
  res.send('Welcome!');
});

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/jobs',jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;




const start = async ()=> {
     try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`server is listening on port :${port}`);
          });

     }catch (error){
        console.log(error);
     }
}

start();
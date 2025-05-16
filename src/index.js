// require('dotenv').config({path:"./env"})
import dotenv from 'dotenv'
import { app } from './app.js';
dotenv.config({
    path:"./env"
})
import connectDB from "../db/index.js";


connectDB()
.then(
    app.listen((process.env.PORT || 8000),()=>{
        console.log(`server is running at port :${process.env.PORT}`);
        
    })
)
.catch((err)=>{
    console.log("MongoDB connection failed !!!!!",err);
})











// import express from 'express'
// const app = express()
// // mongoose.connect('mongodb://127.0.0.1:27017/test');
// function connectDB() {

// }

// // connectDB();
// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`);
//         app.on("error", (err) => {
//             console.log("error", err);
//             throw err;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
            
//         })
//     }
//     catch (err) {
//         console.log("Error", err);
//         throw err

//     }
// })()
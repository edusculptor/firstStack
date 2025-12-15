import e from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const DATABASE_CONNECTION= async()=>{
    const connect = await mongoose.connect(process.env.MongoDB)
    if(connect){
        console.log("Database connected successfully");
    }
}
DATABASE_CONNECTION();

const app=e();
const PORT=3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
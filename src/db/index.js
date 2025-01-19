import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const mongodbInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connection SUCCESSFUL!! HOST: ${mongodbInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection FAILED", error);
        process.exit(1);
    }
}

export default connectDB;
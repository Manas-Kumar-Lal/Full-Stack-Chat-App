import mongoose, { mongo } from "mongoose";

export const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected successfully on host: ", connectionInstance.connection.host);
    } catch (error) {
        console.log("Couldn't connect to Mongo: ", error);
    }
}
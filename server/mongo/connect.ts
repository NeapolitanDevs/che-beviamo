import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
mongoose.set('strictQuery', false);
const connectDB = async (): Promise<void> => {
    try {
        mongoose.connect(process.env.MONGO_URI as string, () => console.log("Mongo connected successfully"));
    } catch (error: unknown){
        console.error(JSON.stringify(error || ""), "connect.ts:connectDB()")
    }
}

export {connectDB};
export default {connectDB};

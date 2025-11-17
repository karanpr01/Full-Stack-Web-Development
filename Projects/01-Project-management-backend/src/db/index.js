import mongoose from "mongoose";

const connectDB = async() => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("✅ MongoDB connected");
    } catch (error) {
        console.log("❌ MongoDB connection error");
        console.log(error);
        process.exit(1)
        
    }
}

export default connectDB
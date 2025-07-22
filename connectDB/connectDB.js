import mongoose from "mongoose";

import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection successful...");
  } catch (error) {
    console.error("Connection failed:", error.message);
  }
};

export default connectDB;

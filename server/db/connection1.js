import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const MONGODB_URL = process.env.MONGODB_URL;
    const instance = await mongoose.connect(MONGODB_URL);
    console.log(`MongoDB Connected: ${instance.connection.host}`);
  } catch (error) {
    console.log(error); // Fix: Correct variable name
  }
};

export default connectDb; // ✅ Correct ESM syntax

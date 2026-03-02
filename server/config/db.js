import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Mongoose 7+ does not accept useNewUrlParser/useUnifiedTopology — removed
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    // Don't process.exit(1) in serverless — just log and let requests fail gracefully
  }
};

export default connectDB;

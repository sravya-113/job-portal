// import mongoose from "mongoose"

// //function to connect to the mongodb database
// const connectDB=async ()=>{
//     mongoose.connection.on('connected',()=>console.log('Database connected'))
//     await mongoose.connect.connect(`${process.env.MONGODB_URI}/job-portal`)
// }
// export default connectDB


// import mongoose from "mongoose";

// // Function to connect to the MongoDB database
// const connectDB = async () => {
//   try {
//     // Connect to MongoDB
//     await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     // Success message
//     console.log("✅ Database connected");

//     // Optional: listen for connection errors
//     mongoose.connection.on("error", (err) =>
//       console.error("❌ MongoDB connection error:", err)
//     );
//   } catch (err) {
//     console.error("❌ Failed to connect to MongoDB:", err);
//     process.exit(1); // Exit process if connection fails
//   }
// };

// export default connectDB;




// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`);
//     console.log("✅ Database connected");

//     mongoose.connection.on("error", (err) =>
//       console.error("❌ MongoDB connection error:", err)
//     );
//   } catch (err) {
//     console.error("❌ Failed to connect to MongoDB:", err);
//     process.exit(1);
//   }
// };

// export default connectDB;



// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`);
//     console.log("✅ Database connected");

//     mongoose.connection.on("error", (err) =>
//       console.error("❌ MongoDB connection error:", err)
//     );
//   } catch (err) {
//     console.error("❌ Failed to connect to MongoDB:", err);
//     process.exit(1); // exit if DB connection fails
//   }
// };

// export default connectDB;

// config/db.js
// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     // Connect to MongoDB Atlas
//     await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`);

//     // Success message
//     console.log("✅ Database connected");

//     // Listen for connection errors
//     mongoose.connection.on("error", (err) =>
//       console.error("❌ MongoDB connection error:", err)
//     );
//   } catch (err) {
//     console.error("❌ Failed to connect to MongoDB:", err.message);
//     process.exit(1); // Exit server if DB fails
//   }
// };

// export default connectDB;




// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`);
//     console.log("✅ Database connected");
//   } catch (err) {
//     console.error("❌ Failed to connect to MongoDB:", err.message);
//     process.exit(1);
//   }
// };

// export default connectDB;



import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;

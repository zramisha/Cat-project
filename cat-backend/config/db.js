import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); 
const connectDB = async () => {
  mongoose.connect(process.env.MONGO_URL)
  .then(
    console.log(`Connected to database`)
  )
  .catch(e => {
    console.log(`Database connection failed\n${e}.message`);
  })
}


export default connectDB;
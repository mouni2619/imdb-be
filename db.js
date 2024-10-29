import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export function dataBaseConnection() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDb is Connected...");
  } catch (error) {
    console.log(`MongoDB Connection Error => ${error}`);
  }
}

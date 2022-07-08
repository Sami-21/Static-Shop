import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const PATH = process.env.DB || "null";
export default async () => {
  try {
    mongoose.connect(PATH, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("DataBase connected");
  } catch (error) {
    console.log(error);
  }
};

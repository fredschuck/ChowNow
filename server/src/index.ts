import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Connected to database."));

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);

app.listen(7001, () => {
  console.log("Server is running on http://localhost:7001");
});

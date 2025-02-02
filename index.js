import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

const port = 5001;
const app = express();
app.use(cors());
mongoose.connect('mongodb+srv://rulokifs:mongodb@cluster0.xlryd.mongodb.net/PetShop').then((val) => {
  app.listen(port, () => {
    console.log(`server is running on port ${port}`)
  });
}).catch((err) => {
  console.log(err);
});


app.use(express.json());
app.use(authRoutes)


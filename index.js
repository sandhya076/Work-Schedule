import bodyParser from "body-parser";
import Mongoose from "mongoose";
import express from "express";
import cors from "cors";
import work from "./routes/work.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/work", work);
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;
Mongoose.connect(CONNECTION_URL)

  .then(() => app.listen(PORT, () => console.log(`server running on :${PORT}`)))
  .catch((error) => console.log(error.message));

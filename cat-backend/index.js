//package imports
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
//file imports
import connectDB from "./config/db.js";


dotenv.config();
//--- db connection ---//
connectDB();

//rest object//
const app = express();

// ---- Middlewares--- //

app.use(morgan("dev"));

// ------ Routes ------ //
app.get("/", (req, res) => {
  res.status(200).json({ message: "/ get request working" });
});


//-------- Listen -------//
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server starting...".blue);
  console.log(
    `server running on ${process.env.DEV_MODE} mode on port http://localhost:${PORT}`.bgCyan
  );
});
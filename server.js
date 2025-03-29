const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/Db.js");
const cors = require("cors");
const authRoutes = require("./Routes/authRoutes.js");
const { createDefaultAdmin } = require("./Controllers/authController.js");
const InsertServices=require('./Data/ServiceData.js')
const PayPalRoutes = require("./Routes/Paypal.js");
dotenv.config();


connectDB();
const app = express();
const allowedOrigins = [
  "https://doit-front.netlify.app", // Local frontend (for development)
  "https://production-front.vercel.app",
  "https://d0lt.com",
  "https://prebooking.d0lt.com",
  "http://localhost:8080",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Allow cookies if needed
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", function (req, res) {
  res.send("hey");
});

app.use("/api/auth", authRoutes);
 app.use("/api", PayPalRoutes);
app.listen(process.env.PORT || 5000, async () => {
  console.log(`server is running on ${process.env.PORT}`);
  await createDefaultAdmin();
  await InsertServices()
});

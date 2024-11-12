const express = require("express");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const userRoutes = require("./routes/user")

const app = express();

const port = 3000;

dotenv.config();

// middleware

app.use(express.json());
app.use ("/user", userRoutes)

// Connection

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Mongodb connected");
});
// Server
app.listen(port, () => {
  console.log("Serving is running on port 3000");
});

module.exports = app;

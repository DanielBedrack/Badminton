require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const userRoutes = require("./Routes/User");
const matchesFilterRoutes = require("./Routes/MatchFilter");
const matchesRoutes = require("./Routes/Match");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/user", userRoutes);
//app.use("/api/matches", matchesFilterRoutes);
app.use("/api/matches", matchesRoutes);
console.log("right after the matchesRoutes");



// Connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listening for request
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on PORT:", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

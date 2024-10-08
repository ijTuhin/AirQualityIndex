const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const datasetRoute = require("./Routes/datasetRoute.js");

const app = express();
app.use(cors()); // using middleware
app.use(express.json()); // to Body parse

require("dotenv").config();

/* *******************
DB connection with Mongoose
******************** */
const database = (module.exports = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@dbhost.ueaoans.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    )
    .then(() => console.log(`Successful Connection to ${process.env.DB_NAME}`))
    .catch((err) => console.log(err));
});

database();

app.use("/", datasetRoute);

app.listen(3001, () => {
  console.log("Air Quality Index Mongoose Server running");
});
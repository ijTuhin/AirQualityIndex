const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const datasetSchema = require("../Schemas/datasetSchema.js");
const Dataset = new mongoose.model("Dataset", datasetSchema);

router.get("/:date", async (req, res) => {
  const { lat, long } = req.query;
  const toPointThree = {
    lat: parseFloat(lat).toFixed(2).toString() + "5",
    long: parseFloat(long).toFixed(2).toString() + "5",
  };
  // const toPointFour = {
  //   lat: parseFloat(lat).toFixed(4).toString(),
  //   long: parseFloat(long).toFixed(4).toString(),
  // };
  // const toPointFive = {
  //   lat: parseFloat(lat).toFixed(5).toString(),
  //   long: parseFloat(long).toFixed(5).toString(),
  // };
  await Dataset.findOne({
    time: req.params.date,
    latitude: toPointThree.lat,
    longitude: toPointThree.long,
  })
    .select({ time: 0 })
    .then((data) => {
      res.status(200).json(data);
      console.log(data, req.query, toPointThree, req.params.date);
    })
    .catch(() => {
      res.status(400).json({
        error: "Oops! Something went wrong!",
      });
    });
});

module.exports = router;

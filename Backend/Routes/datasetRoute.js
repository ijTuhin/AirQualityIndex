const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const datasetSchema = require("../Schemas/datasetSchema.js");
const Dataset = new mongoose.model("Dataset", datasetSchema);

router.get("/:date", async (req, res) => {
  const { lat, long } = req.query;
  await Dataset.findOne({
    time: req.params.date,
    latitude: lat,
    longitude: long,
  })
    .select({ time: 0 })
    .then((data) => {
      res.status(200).json(data);
      console.log(data, req.query, req.params.date);
    })
    .catch(() => {
      res.status(400).json({
        error: "Oops! Something went wrong!",
      });
    });
});

module.exports = router;

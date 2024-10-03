const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const datasetSchema = require("../Schemas/datasetSchema.js");
const Dataset = new mongoose.model("Dataset", datasetSchema);

router.get("/:date", async (req, res) => {
  await Dataset.findOne({
    time: req.params.date,
    latitude: req.body.lat,
    longitude: req.body.long,
  })
    .then((data) => {
      res.status(200).json(data);
    //   console.log(data, req.body, req.params.date);
    })
    .catch(() => {
      res.status(400).json({
        error: "Oops! Something went wrong!",
      });
    });
});

module.exports = router;

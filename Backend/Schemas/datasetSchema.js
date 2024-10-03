const mongoose = require("mongoose");
const datasetSchema = mongoose.Schema({
  time: String,
  longitude: String,
  latitude: String,
  observed: String,
  gnn: String,
  cnn: String,
  'cnn+lstm': String,
  'gnn+lstm': String,
});

module.exports = datasetSchema;
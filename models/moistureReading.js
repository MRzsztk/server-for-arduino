const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const moistureReadingSchema = new Schema({
  probe: String,
  moisture: Number,
  createdAt: { type: Date, default: Date.now }
});

const MoistureReading = mongoose.model("MoistureReading", moistureReadingSchema);

module.exports = MoistureReading;
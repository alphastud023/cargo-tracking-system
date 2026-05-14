const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
  trackingNumber: {
    type: String,
    required: true,
    unique: true
  },

  sender: {
    type: String,
    required: true
  },

  receiver: {
    type: String,
    required: true
  },

  origin: {
    type: String,
    required: true
  },

  destination: {
    type: String,
    required: true
  },

  status: {
    type: String,
    required: true
  },

  currentLocation: {
    type: String,
    required: true
  },

  shipmentType: {
    type: String,
    default: "Air Freight"
  },

  weight: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Shipment", shipmentSchema);
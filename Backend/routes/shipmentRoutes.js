const Shipment = require("../models/Shipment");

const express = require("express");

const router = express.Router();

const {
  createShipment,
  getShipment,
} = require("../controllers/shipmentController");


// CREATE SHIPMENT

router.post("/", createShipment);


// GET SHIPMENT
router.get("/", async (req, res) => {

  try {

    const shipments = await Shipment.find().sort({
      createdAt: -1
    });

    res.json(shipments);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});
router.get("/:trackingNumber", getShipment);


module.exports = router;
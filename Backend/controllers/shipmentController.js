const Shipment = require("../models/shipment");


// CREATE SHIPMENT

const createShipment = async (req, res) => {

  try {

    const shipment = await Shipment.create(req.body);

    res.status(201).json(shipment);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


// GET SHIPMENT BY TRACKING NUMBER

const getShipment = async (req, res) => {

  try {

    const shipment = await Shipment.findOne({
      trackingNumber: req.params.trackingNumber
    });

    if (!shipment) {

      return res.status(404).json({
        message: "Shipment not found"
      });

    }

    res.json(shipment);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


module.exports = {
  createShipment,
  getShipment,
};
const shipments = [

  {
    trackingNumber: "TRK100",
    sender: "John",
    receiver: "Michael",
    origin: "China",
    destination: "Nigeria",
    status: "IN TRANSIT",
    currentLocation: "Lagos Port",
    estimatedDelivery: "May 12 2026"
  },

  {
    trackingNumber: "TRK200",
    sender: "Sarah",
    receiver: "David",
    origin: "USA",
    destination: "Ghana",
    status: "DELIVERED",
    currentLocation: "Accra",
    estimatedDelivery: "Delivered"
  },

  {
    trackingNumber: "TRK300",
    sender: "Lisa",
    receiver: "Daniel",
    origin: "UK",
    destination: "South Africa",
    status: "PROCESSING",
    currentLocation: "London Warehouse",
    estimatedDelivery: "May 18 2026"
  }

];

module.exports = shipments;
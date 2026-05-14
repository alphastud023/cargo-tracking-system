require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const shipmentRoutes = require("./routes/shipmentRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Cargo Backend Running");
});

app.use("/api/shipments", shipmentRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
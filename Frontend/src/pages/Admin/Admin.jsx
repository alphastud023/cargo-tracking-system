import { useState, useEffect } from "react";

export default function Admin() {

  const [formData, setFormData] = useState({

    trackingNumber: "",

    sender: "",

    receiver: "",

    origin: "",

    destination: "",

    status: "",

    currentLocation: "",

    shipmentType: "",

    weight: ""

  });

  const [message, setMessage] = useState("");

  const [shipments, setShipments] = useState([]);


  // FETCH ALL SHIPMENTS

  async function fetchShipments() {

    try {

      const response = await fetch(
        "http://localhost:5000/api/shipments"
      );

      const data = await response.json();

      setShipments(data);

    } catch (error) {

      console.log(error);

    }

  }


  // LOAD SHIPMENTS WHEN PAGE LOADS

  useEffect(() => {

    fetchShipments();

  }, []);


  // HANDLE INPUT CHANGE

  function handleChange(e) {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  }


  // CREATE SHIPMENT

  async function createShipment(e) {

    e.preventDefault();

    setMessage("");

    try {

      const response = await fetch(
        "http://localhost:5000/api/shipments",
        {

          method: "POST",

          headers: {

            "Content-Type": "application/json"

          },

          body: JSON.stringify(formData)

        }
      );

      const data = await response.json();

      if (!response.ok) {

        setMessage(data.message);

        return;

      }

      setMessage("Shipment Created Successfully");

      // REFRESH SHIPMENTS
      fetchShipments();

      // CLEAR FORM

      setFormData({

        trackingNumber: "",

        sender: "",

        receiver: "",

        origin: "",

        destination: "",

        status: "",

        currentLocation: "",

        shipmentType: "",

        weight: ""

      });

    } catch (error) {

      setMessage("Server Error");

    }

  }


  return (

    <div style={{
      padding: "40px",
      maxWidth: "800px",
      margin: "auto",
      fontFamily: "Arial"
    }}>

      <h1>Create Shipment</h1>

      <form onSubmit={createShipment}>

        <input
          type="text"
          name="trackingNumber"
          placeholder="Tracking Number"
          value={formData.trackingNumber}
          onChange={handleChange}
          style={{ width: "100%", padding: "12px" }}
        />

        <br /><br />

        <input
          type="text"
          name="sender"
          placeholder="Sender"
          value={formData.sender}
          onChange={handleChange}
          style={{ width: "100%", padding: "12px" }}
        />

        <br /><br />

        <input
          type="text"
          name="receiver"
          placeholder="Receiver"
          value={formData.receiver}
          onChange={handleChange}
          style={{ width: "100%", padding: "12px" }}
        />

        <br /><br />

        <input
          type="text"
          name="origin"
          placeholder="Origin"
          value={formData.origin}
          onChange={handleChange}
          style={{ width: "100%", padding: "12px" }}
        />

        <br /><br />

        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
          style={{ width: "100%", padding: "12px" }}
        />

        <br /><br />

        <input
          type="text"
          name="status"
          placeholder="Status"
          value={formData.status}
          onChange={handleChange}
          style={{ width: "100%", padding: "12px" }}
        />

        <br /><br />

        <input
          type="text"
          name="currentLocation"
          placeholder="Current Location"
          value={formData.currentLocation}
          onChange={handleChange}
          style={{ width: "100%", padding: "12px" }}
        />

        <br /><br />

        <input
          type="text"
          name="shipmentType"
          placeholder="Shipment Type"
          value={formData.shipmentType}
          onChange={handleChange}
          style={{ width: "100%", padding: "12px" }}
        />

        <br /><br />

        <input
          type="text"
          name="weight"
          placeholder="Weight"
          value={formData.weight}
          onChange={handleChange}
          style={{ width: "100%", padding: "12px" }}
        />

        <br /><br />

        <button
          type="submit"
          style={{
            padding: "14px 20px",
            border: "none",
            background: "#111",
            color: "#fff",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >

          Create Shipment

        </button>

      </form>

      <br />

      <p>{message}</p>

      <hr />

      <h2>All Shipments</h2>

      {shipments.length === 0 && (

        <p>No shipments found.</p>

      )}

      {shipments.map((shipment) => (

        <div
          key={shipment._id}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
            background: "#f9f9f9"
          }}
        >

          <p>
            <strong>Tracking Number:</strong>{" "}
            {shipment.trackingNumber}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {shipment.status}
          </p>

          <p>
            <strong>Sender:</strong>{" "}
            {shipment.sender}
          </p>

          <p>
            <strong>Receiver:</strong>{" "}
            {shipment.receiver}
          </p>

          <p>
            <strong>Origin:</strong>{" "}
            {shipment.origin}
          </p>

          <p>
            <strong>Destination:</strong>{" "}
            {shipment.destination}
          </p>

          <p>
            <strong>Current Location:</strong>{" "}
            {shipment.currentLocation}
          </p>

          <p>
            <strong>Shipment Type:</strong>{" "}
            {shipment.shipmentType}
          </p>

          <p>
            <strong>Weight:</strong>{" "}
            {shipment.weight}
          </p>

        </div>

      ))}

    </div>

  );

}
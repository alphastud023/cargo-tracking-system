import { useState } from "react";
import "./TrackingPanel.css";

export default function TrackingPanel() {

  const [trackingId, setTrackingId] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const [error, setError] = useState("");


  async function submit(e) {

    e.preventDefault();

    setError("");

    setResult(null);

    const id = trackingId.trim();

    if (!id) {

      setError("Please enter a tracking number.");

      return;

    }

    try {

      setLoading(true);

      const response = await fetch(
        `http://localhost:5000/api/shipments/${id}`
      );

      const data = await response.json();

      if (!response.ok) {

        setError(data.message || "Shipment not found.");

        return;

      }

      setResult(data);

    } catch (err) {

      setError("Server Error. Please try again.");

    } finally {

      setLoading(false);

    }

  }


  return (

    <div className="trackingPanel">

      <div className="trackingTitle">
        Track Shipment
      </div>

      <form
        className="trackingForm"
        onSubmit={submit}
      >

        <input
          className="trackingInput"
          type="text"
          placeholder="Enter Tracking Number"
          value={trackingId}
          onChange={(e) =>
            setTrackingId(e.target.value)
          }
        />

        <button
          className="trackingBtn"
          type="submit"
          disabled={loading}
        >

          {loading ? "Tracking..." : "TRACK"}

        </button>

      </form>


      {error && (

        <div className="trackingError">

          {error}

        </div>

      )}


      {result && (

        <div className="trackingResult">

          <div className="trackingRow">
            <div className="trackingKey">
              Tracking Number
            </div>

            <div className="trackingVal">
              {result.trackingNumber}
            </div>
          </div>


          <div className="trackingRow">
            <div className="trackingKey">
              Status
            </div>

            <div className="trackingVal">
              {result.status}
            </div>
          </div>


          <div className="trackingRow">
            <div className="trackingKey">
              Sender
            </div>

            <div className="trackingVal">
              {result.sender}
            </div>
          </div>


          <div className="trackingRow">
            <div className="trackingKey">
              Receiver
            </div>

            <div className="trackingVal">
              {result.receiver}
            </div>
          </div>


          <div className="trackingRow">
            <div className="trackingKey">
              Origin
            </div>

            <div className="trackingVal">
              {result.origin}
            </div>
          </div>


          <div className="trackingRow">
            <div className="trackingKey">
              Destination
            </div>

            <div className="trackingVal">
              {result.destination}
            </div>
          </div>


          <div className="trackingRow">
            <div className="trackingKey">
              Current Location
            </div>

            <div className="trackingVal">
              {result.currentLocation}
            </div>
          </div>


          <div className="trackingRow">
            <div className="trackingKey">
              Shipment Type
            </div>

            <div className="trackingVal">
              {result.shipmentType}
            </div>
          </div>


          <div className="trackingRow">
            <div className="trackingKey">
              Weight
            </div>

            <div className="trackingVal">
              {result.weight}
            </div>
          </div>

        </div>

      )}

    </div>

  );

}
import React from "react";
import Booking from "./Booking";

function Bookings() {
  return (
    <div className="bookings" style={{ marginBottom: "7rem" }}>
      <h2 style={{paddingTop: "2rem"}}>Your Schedule Visits</h2>
      <Booking />
      <Booking />
      <Booking />
    </div>
  );
}

export default Bookings;

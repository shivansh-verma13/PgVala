import React from "react";
import AccomodationList from "./Accommodation";

function AccomodationLists() {
  return (
    <div style={{ marginBottom: "5rem" }}>
      <h2
        style={{
          marginTop: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "2rem",
        }}
      >
        Accomodation List
      </h2>
      <AccomodationList />
      <AccomodationList />
      <AccomodationList />
    </div>
  );
}

export default AccomodationLists;

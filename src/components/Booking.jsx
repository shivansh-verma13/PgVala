import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";


export default function Booking() {
  return (
    <div
      className="booking-card"
      style={{ marginTop: "2rem", marginBottom: "-1rem", border: "none" }}
    >
      <Card
        sx={{
          maxWidth: "100%",
          borderRadius: "25px",
          padding: "0.5rem",
        }}
      >
        <CardHeader
          action={
            <Button
              sx={{ marginLeft: "2rem", borderRadius: "25px" }}
              color="error"
              variant="contained"
              aria-label="cancel-button"
            >
              Cancel
            </Button>
          }
          title="02-12-2023"
          subheader="10:45 PM"
        />
        <CardContent style={{ borderTop: "1px solid #B4B4B3" }}>
          <Typography variant="body2" color="text.secondary">
            <div className="booker">
              <div className="booker-details">
                <h5>Vineet Prabhakar</h5>
                <p style={{ marginTop: "-0.2rem" }}>99999999</p>
                <p style={{ marginTop: "-1rem" }}>abc street, xyz, Delhi</p>
              </div>
            </div>
            <Button
              variant="contained"
              color="error"
              size="small"
              sx={{ borderRadius: "15px" }}
              startIcon={<LocationOnIcon />}
            >
              Get Location
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

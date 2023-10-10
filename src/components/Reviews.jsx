import React from "react";
import Review from "./Review";
import Button from "@mui/material/Button";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { Link } from "react-router-dom";

function Reviews() {
  return (
    <div style={{ backgroundColor: "#F4EEEE", marginBottom: "5rem" }}>
      <h6
        style={{
          padding: "10px",
          fontWeight: "bold",
          marginTop: "-3rem",
          marginBottom: "3rem",
        }}
      >
        What do customers have to say about us?
      </h6>
      <div className="reviews">
        <Review />
        <Review />
        <Review />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "0.5rem",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              marginBottom: "0.3rem",
              textAlign: "center",
            }}
          >
            And Many More
          </p>
          <div className="more-reviews">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", paddingBottom: "1rem" }}>
        <Link to="/ratingandreview" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            size="small"
            color="error"
            sx={{
              width: "95%",
            }}
            endIcon={<ReviewsIcon sx={{ color: "red" }} />}
          >
            Have a say in your stay
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Reviews;

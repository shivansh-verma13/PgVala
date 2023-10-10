import * as React from "react";
import Card from "@mui/material/Card";
import Carousel from "react-bootstrap/Carousel";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import roomAreaImg from "../assets/images/room-area.jpg";
import windowImg from "../assets/images/window.jpg";
import studyRoomImg from "../assets/images/study-room.jpg";

export default function AccomodationList() {
  return (
    <div
      className="card"
      style={{
        marginTop: "2rem",
        marginBottom: "1rem",
        border: "none",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "max-content",
          height: "max-content",
          position: "absolute",
          backgroundColor: "red",
          color: "#fff",
          top: "1.5rem",
          left: "1rem",
          zIndex: "100001",
          border: "1px solid green",
          padding: "10px",
          borderRadius: "15px",
          boxShadow: "1px 1px 5px #000",
        }}
      >
        ₹ 5000 Bed/Month
      </div>
      <Card
        sx={{
          maxWidth: "95%",
          borderRadius: "15px",
          boxShadow: "1px 1px 5px #000",
        }}
      >
        <Carousel style={{ zIndex: "1000" }} data-bs-theme="dark">
          <Carousel.Item interval={1000}>
            <div className="carousel-img">
              <img
                className="d-block w-100 img-1"
                src={roomAreaImg}
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="carousel-img">
              <img
                className="d-block w-100 img-2"
                src={windowImg}
                alt="Second slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-img">
              <img
                className="d-block w-100 img-3"
                src={studyRoomImg}
                alt="Third slide"
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <CardContent>
          <Typography>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                gap: "5px",
                paddingTop: "10px",
              }}
            >
              <Typography
                sx={{
                  padding: "0.2rem 0.5rem",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                }}
              >
                acc07Rm02
              </Typography>
              <Typography
                sx={{
                  borderRadius: "15px",
                  border: "1px solid red",
                  padding: "0.2rem 0.5rem",
                  fontSize: "0.8rem",
                  backgroundColor: "red",
                  color: "#fff",
                }}
              >
                1 Sharing
              </Typography>
              <Typography
                sx={{
                  borderRadius: "15px",
                  border: "1px solid red",
                  padding: "0.2rem 0.5rem",
                  fontSize: "0.8rem",
                  backgroundColor: "red",
                  color: "#fff",
                }}
              >
                Semi Furnished
              </Typography>
            </Typography>
            <Typography>
              <Switch
                sx={{ marginTop: "0rem", width: 62, height: 40 }}
                color="success"
              />
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

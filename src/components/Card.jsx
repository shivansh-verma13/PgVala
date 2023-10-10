import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Carousel from "react-bootstrap/Carousel";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../assets/images/logo-2.jpeg";
import roomAreaImg from "../assets/images/room-area.jpg";
import windowImg from "../assets/images/window.jpg";
import studyRoomImg from "../assets/images/study-room.jpg";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import ShareIcon from "@mui/icons-material/Share";
import WomanIcon from "@mui/icons-material/Woman";
// import ManIcon from "@mui/icons-material/Man";
import WcIcon from "@mui/icons-material/Wc";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import SpaceBarIcon from "@mui/icons-material/SpaceBar";
import BathtubIcon from "@mui/icons-material/Bathtub";
import BedIcon from "@mui/icons-material/Bed";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ReviewsIcon from "@mui/icons-material/Reviews";
import DateTimePicker from "./DateTimePicker";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardView() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Do something with selectedDate and selectedTime here
  };

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
          backgroundColor: "green",
          color: "#fff",
          top: "6rem",
          left: "0.6rem",
          zIndex: "100001",
          border: "1px solid green",
          padding: "10px",
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0,
          borderBottomRightRadius: "15px",
          borderTopRightRadius: "15px",
          boxShadow: "1px 1px 10px #000",
        }}
      >
        Available
      </div>
      <Card sx={{ maxWidth: "95%", boxShadow: "1px 1px 15px #000" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="pgs">
              <img
                src={logo}
                alt="company-logo"
                style={{ width: "50px", height: "50px" }}
              />
            </Avatar>
          }
          action={
            <IconButton size="large" color="error" aria-label="share">
              <ShareIcon />
            </IconButton>
          }
          title="PG-NAME"
          subheader="pg-address"
        />
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
          <Typography variant="body2" color="text.secondary">
            <div className="amenities">
              <Accordion sx={{ marginBottom: "1rem" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ color: "red" }}>
                    See Amenities and Facilities
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                    alignItems: "start",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <Typography
                    sx={{
                      padding: "3px",
                      border: "1px solid #000",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                    }}
                  >
                    {" "}
                    <SpaceBarIcon
                      color="error"
                      size="small"
                      sx={{ marginRight: "1rem" }}
                    />
                    Spacious
                  </Typography>
                  <Typography
                    sx={{
                      padding: "3px",
                      border: "1px solid #000",
                      borderRadius: "20px",
                      fontSize: "0.7rem",
                    }}
                  >
                    {" "}
                    <AcUnitIcon
                      color="error"
                      size="small"
                      sx={{ marginRight: "1rem" }}
                    />
                    A.C.
                  </Typography>
                  <Typography
                    sx={{
                      padding: "3px",
                      border: "1px solid #000",
                      borderRadius: "20px",
                      fontSize: "0.7rem",
                    }}
                  >
                    {" "}
                    <CheckroomIcon
                      color="error"
                      size="small"
                      sx={{ marginRight: "1rem" }}
                    />
                    Cupboard
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
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
                  borderRadius: "15px",
                  border: "1px solid #000",
                  padding: "0.2rem 0.5rem",
                  fontSize: "0.8rem",
                }}
              >
                Attached
              </Typography>
              <Typography
                sx={{
                  borderRadius: "15px",
                  border: "1px solid #000",
                  padding: "0.2rem 0.5rem",
                  fontSize: "0.8rem",
                }}
              >
                Fully Furnished
              </Typography>
            </Typography>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
              paddingTop: "1rem",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <BedIcon color="error" />
              <Typography sx={{ fontSize: "0.7rem", color: "#B4B4B3" }}>
                Single Bed
              </Typography>
            </Typography>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItmes: "center",
              }}
            >
              <WomanIcon color="error" />
              <Typography sx={{ fontSize: "0.7rem", color: "#B4B4B3" }}>
                Girls
              </Typography>
            </Typography>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <WcIcon color="error" />
              <Typography sx={{ fontSize: "0.7rem", color: "#B4B4B3" }}>
                Family
              </Typography>
            </Typography>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BathtubIcon color="error" />
              <Typography sx={{ fontSize: "0.7rem", color: "#B4B4B3" }}>
                Attached
              </Typography>
            </Typography>
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#61677A",
              padding: "1rem 1rem 0 0",
              marginBottom: "-1rem",
            }}
          >
            ₹ 2222/month
          </Typography>
        </CardContent>
        <Link to="/ratingandreview" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            color="error"
            startIcon={<ReviewsIcon />}
            sx={{
              marginLeft: "0.5rem",
              marginTop: "0.5rem",
            }}
          >
            Reviews
          </Button>
        </Link>
        <CardActions disableSpacing>
          <Button
            variant="contained"
            startIcon={<EventAvailableIcon />}
            onClick={handleExpandClick}
            sx={{
              backgroundColor: "#F31559",
              "&:hover": { backgroundColor: "#C51605" },
            }}
          >
            Schedule Visit
          </Button>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <h3>Schedule a Visit</h3>
            </Typography>
            <form method="post" onSubmit={handleSubmit}>
              <Typography paragraph>
                <div className="input-tag">
                  <div>
                    <DateTimePicker />
                  </div>
                </div>
              </Typography>
              <Typography paragraph>
                <Button
                  type="submit"
                  endIcon={<EditCalendarIcon />}
                  sx={{
                    backgroundColor: "#F31559",
                    "&:hover": { backgroundColor: "#C51605" },
                    width: "100%",
                  }}
                  variant="contained"
                >
                  Schedule a Visit
                </Button>
              </Typography>
            </form>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

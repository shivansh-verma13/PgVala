import * as React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "@mui/material/Alert";
import axios from "axios";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

function OwnerLogin() {
  const [isClicked, setClicked] = React.useState(true);
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [validated, setValidated] = React.useState(false);
  const [contactDetails, setContactDetails] = React.useState("");
  const [isDisabledLoader, setDisabledLoader] = React.useState(false);
  const [isDisabledLoaderLogin, setDisabledLoaderLogin] = React.useState(false);
  const [isAlert, setAlert] = React.useState(true);
  const [otp, setOtp] = React.useState("");
  const navigate = useNavigate();

  async function handleClick(event) {
    event.preventDefault();
    setDisabledLoader(true);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    try {
      const response = await axios.post(
        `https://davaivala.shop/resend_otp?contact=${contactDetails}&user_type=landlord`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      console.log("API response: ", response.data.message);
    } catch (error) {
      console.error("Failed to make a request: ", error.message);
    }
    setDisabledLoader(false);
    setClicked(false);
  }

  async function handleLogin(event) {
    event.preventDefault();
    setDisabledLoaderLogin(true);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else if (!contactDetails || !otp) {
      event.stopPropagation();
    } else {
      try {
        const response = await axios.post(
          "https://davaivala.shop/app_login",
          {
            contact: contactDetails,
            otp: otp,
            user_type: "landlord",
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const ownerToken = response.data.access_token;
        console.log("API response: ", ownerToken);
        // Store the ownerToken in local storage
        localStorage.setItem("ownerToken", ownerToken);

        navigate("/accommodationlist");
      } catch (error) {
        if (error.response) {
          // Server returned a response with an error status code
          if (error.response.status === 400) {
            // Bad Request (or other specific error codes)
            setAlert(false);
          } else {
            setAlert(false);
          }
          setAlert(false);
        } else {
          // Network error or other errors
          setAlert(false);
        }
      }
    }

    setValidated(true);
    setDisabledLoaderLogin(false);
    setLoggedIn(true);
  }
  return (
    <div className="login">
      <Alert
        severity={isAlert ? "success" : "error"}
        sx={{ display: isLoggedIn ? "block" : "none", marginBottom: "2rem" }}
      >
        {isAlert
          ? "You have been successfully logged in!"
          : "Please try again, and put the correct OTP!"}
      </Alert>
      <h3>Owner Login</h3>
      <Form noValidate validated={validated} onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicContact">
          <Form.Label>Contact Details</Form.Label>
          <Form.Control
            required
            type="text"
            autoComplete="off"
            placeholder="Enter your Contact"
            value={contactDetails}
            onChange={(e) => {
              setContactDetails(e.target.value);
            }}
          />
          <Form.Control.Feedback type="invalid">
            *Contact Details are required
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant="success"
          type="submit"
          style={{ marginBottom: "1.5rem" }}
          onClick={handleClick}
        >
          Get OTP
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <CircularProgress
            color="error"
            sx={{
              marginTop: "-5rem",
              display: isDisabledLoader ? "inline" : "none",
            }}
          />
        </Box>
        <Form.Group className="mb-3" controlId="formBasicOTP">
          <Form.Label>OTP</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your OTP"
            autoComplete="off"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            disabled={isClicked}
          />
          <Form.Control.Feedback type="invalid">
            *OTP is required
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant="danger"
          type="submit"
          disabled={!contactDetails || !otp}
        >
          Login
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <CircularProgress
            color="error"
            sx={{
              marginTop: "-3rem",
              display: isDisabledLoaderLogin ? "inline" : "none",
            }}
          />
        </Box>
      </Form>
    </div>
  );
}

export default OwnerLogin;

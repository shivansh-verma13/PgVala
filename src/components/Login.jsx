import * as React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "@mui/material/Alert";

function Login() {
  const [isClicked, setClicked] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [contactDetails, setContactDetails] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [contactError, setContactError] = React.useState("");
  const [otpError, setOtpError] = React.useState("");
  function handleClick(event) {
    event.preventDefault();
    setClicked(true);
    setContactError(""); // Reset contact error when "Get OTP" is clicked
    setOtpError(""); // Reset OTP error when "Get OTP" is clicked
  }
  function handleLogin(event) {
    event.preventDefault();
    let hasError = false;

    if (!contactDetails) {
      setContactError("Contact Details are required");
      hasError = true;
    } else {
      setContactError("");
    }

    if (!otp && isClicked) {
      setOtpError("OTP is required");
      hasError = true;
    } else {
      setOtpError("");
    }

    if (hasError) {
      return;
    }

    setLoggedIn(true);
  }
  return (
    <div className="login">
      <Alert
        severity="success"
        sx={{ display: isLoggedIn ? "block" : "none", marginBottom: "2rem" }}
      >
        You have been successfully logged in!
      </Alert>
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicContact">
            <Form.Label>Contact Details</Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder="Enter your Contact"
              value={contactDetails}
              onChange={(e) => {
                setContactDetails(e.target.value);
                setContactError(""); // Clear contact error when input changes
                // Enable OTP input when Contact Details are filled
                setClicked(true);
              }}
            />
            {contactError && (
              <div className="error-message">{contactError}</div>
            )}
          </Form.Group>
          <Button
            variant="success"
            type="submit"
            style={{ marginBottom: "1.5rem" }}
            onClick={handleClick}
          >
            Get OTP
          </Button>
          <Form.Group className="mb-3" controlId="formBasicOTP">
            <Form.Label>OTP</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your OTP"
              autoComplete="off"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              disabled={!isClicked || !contactDetails}
            />
            {otpError && <div className="error-message">{otpError}</div>}
          </Form.Group>
          <Button
            variant="danger"
            type="submit"
            onClick={handleLogin}
            disabled={!isClicked || !contactDetails || !otp}
          >
            Login
          </Button>
        </Form>
      </form>
    </div>
  );
}

export default Login;

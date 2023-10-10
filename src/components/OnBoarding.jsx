import React from "react";
import Button from "@mui/material/Button";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

function OnBoarding() {
  return (
    <div className="onboarding">
      <h6 style={{ fontWeight: "bold" }}>On Board your Pg search.</h6>
      <div className="onboarding-buttons">
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button
            color="error"
            variant="contained"
            startIcon={<AppRegistrationIcon />}
          >
            Register
          </Button>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button color="error" variant="outlined" startIcon={<LoginIcon />}>
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default OnBoarding;

import React from "react";
import logo from "../assets/images/logo-3.png";
import Fab from "@mui/material/Fab";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="company">
        <img style={{ width: "50px", height: "50px" }} src={logo} alt="logo" />
        <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>PGVALA</span>
        <p style={{ fontSize: "0.8rem", textAlign: "center" }}>
          Find your perfect PG.
        </p>
      </div>
      <div className="contact-us">
        <h5 style={{ fontWeight: "600" }}>Contact Us</h5>
        <hr className="hl" />
        <div className="socials">
          <Fab href="" color="primary" size="small" aria-label="add">
            <LinkedInIcon />
          </Fab>
          <Fab href="" color="primary" size="small" aria-label="add">
            <EmailIcon />
          </Fab>
          <Fab href="" color="primary" size="small" aria-label="add">
            <TwitterIcon />
          </Fab>
        </div>
        <div className="copyright">
          <hr className="hl" />
          <p style={{ fontWeight: "200", fontSize: "0.6rem" }}>
            MADE WITH LOVE BY ©PGVALA. COPYRIGHT {currYear}.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

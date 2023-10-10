import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../assets/images/logo-3.png";
import { Link } from "react-router-dom";
// import MainLandingPage from "./MainLandingPage";

function NavigationBar() {
  return (
    <div style={{ boxShadow: "1px 1px 15px #000" }}>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="light"
        data-bs-theme="light"
      >
        <Container>
          <Link style={{ textDecoration: "none" }} to="/">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                style={{ width: "50px", height: "50px" }}
                alt="logo"
              />
              <span style={{ fontWeight: "bold" }}>
                Pg<span style={{ color: "red" }}>Vala</span>
              </span>
            </Navbar.Brand>
          </Link>

          <div>
            <a href="#search">
              <PersonIcon sx={{ color: "red" }} />
            </a>
          </div>
        </Container>
      </Navbar>
      {/* <Routes>
        <Route exact path="/" element={<MainLandingPage />}></Route>
      </Routes> */}
    </div>
  );
}

export default NavigationBar;

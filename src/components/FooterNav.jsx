import * as React from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HomeIcon from "@mui/icons-material/Home";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";

function FooterNav() {
  const [value, setValue] = React.useState(0);
  const [bottomNavigator, setBottomNavigator] = React.useState();
  const navigate = useNavigate();

  function handleScheduleVisitClick() {
    setBottomNavigator(1);
    navigate("/bookings");
  }

  function handleCashbackClick() {
    setBottomNavigator(2);
    navigate("/roominputowner");
  }

  function handleHomeClick() {
    setBottomNavigator(3);
    navigate("/");
  }

  return (
    <div
      className="footer-nav"
      style={{
        boxShadow: "1px 1px 10px #000",
        position: "fixed",
        zIndex: "1000000",
      }}
    >
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            onClick={handleScheduleVisitClick}
            label="Schedule Visit"
            icon={<EventAvailableIcon sx={{ color: "red" }} />}
            sx={{
              "&.Mui-selected": {
                color: "red",
                fontWeight: "bold",
              },
            }}
          />
          <BottomNavigationAction
            onClick={handleCashbackClick}
            label="Cashback"
            icon={<CurrencyRupeeIcon sx={{ color: "red" }} />}
            sx={{
              "&.Mui-selected": {
                color: "red",
                fontWeight: "bold",
              },
            }}
          />
          <BottomNavigationAction
            onClick={handleHomeClick}
            label="Home"
            icon={<HomeIcon sx={{ color: "red" }} />}
            sx={{
              "&.Mui-selected": {
                color: "red",
                fontWeight: "bold",
              },
            }}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default FooterNav;

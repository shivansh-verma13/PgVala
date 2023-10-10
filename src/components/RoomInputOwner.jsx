import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

function RoomInputOwner() {
  const [sharing, setSharing] = React.useState("");
  const handleChange = (event) => {
    setSharing(event.target.value);
  };
  return (
    <div className="owner-input">
      <h6 style={{ fontWeight: "bold", textAlign: "left", width: "95%" }}>
        Room ID: acc07Rm02
      </h6>
      <TextField
        sx={{ width: "95%" }}
        id="outlined-basic"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CurrencyRupeeIcon />
            </InputAdornment>
          ),
        }}
        label="Enter the charged amount"
        variant="outlined"
      />
      <TextField
        sx={{ width: "95%" }}
        id="outlined-basic"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CurrencyRupeeIcon />
            </InputAdornment>
          ),
        }}
        label="Security Money"
        variant="outlined"
      />
      <FormControl
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        fullWidth
      >
        <InputLabel id="demo-simple-select-label">Sharing</InputLabel>
        <Select
          sx={{ width: "95%" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sharing}
          label="Sharing"
          onChange={handleChange}
        >
          <MenuItem value={10}>Single</MenuItem>
          <MenuItem value={20}>Double</MenuItem>
          <MenuItem value={30}>Triple</MenuItem>
        </Select>
      </FormControl>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "start",
          width: "95%",
        }}
      >
        <h6>Furnished Type: -</h6>
        <FormGroup sx={{ marginLeft: "1rem" }}>
          <FormControlLabel
            control={<Checkbox color="error" />}
            label="Semi-Furnished"
          />
          <FormControlLabel
            control={<Checkbox color="error" />}
            label="Un-Furnished"
          />
          <FormControlLabel
            control={<Checkbox color="error" />}
            label="Fully-Furnished"
          />
        </FormGroup>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "start",
          width: "95%",
        }}
      >
        <h6>Tenant Type: -</h6>
        <FormGroup sx={{ marginLeft: "1rem" }}>
          <FormControlLabel
            control={<Checkbox color="error" />}
            label="Girls"
          />
          <FormControlLabel control={<Checkbox color="error" />} label="Boys" />
          <FormControlLabel
            control={<Checkbox color="error" />}
            label="Family"
          />
        </FormGroup>
      </div>
      <Button
        variant="contained"
        sx={{ borderRadius: "25px", boxShadow: "1px 1px 5px #000" }}
        color="success"
        endIcon={<EditIcon />}
      >
        Update
      </Button>
    </div>
  );
}

export default RoomInputOwner;

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

function Search() {
  const top10Cities = [
    "Bhilai",
    "Jaipur",
    "Kota",
    "Patna",
    "Varanasi",
    "Kanpur",
    "Bhopal",
    "Indore",
    "Bhubaneswar",
    "Kolkata",
  ];

  const [selectedCity, setSelectedCity] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedCity) {
      // Show the error modal if no city is selected
      setIsModalOpen(true);
    } else {
      // Handle form submission or redirection here
      navigate("/searchedcity");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div id="search" className="search">
        <Autocomplete
          disablePortal
          size="small"
          id="combo-box-demo"
          options={top10Cities}
          sx={{
            width: "80%",
            backgroundColor: "#fff",
            padding: 0,
            borderRadius: "5px",
          }}
          onChange={(event, newValue) => {
            setSelectedCity(newValue);
          }}
          renderInput={(params) => (
            <TextField
              required
              {...params}
              sx={{ borderRadius: "50px" }}
              label="City"
              placeholder="Search by City"
            />
          )}
        />
        <Button variant="danger" type="submit" style={{ borderRadius: "50px" }}>
          Search
        </Button>{" "}
      </div>
      {/* Modal for displaying error */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="No City Selected"
      >
        <h2>No city has been selected.</h2>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </form>
  );
}

export default Search;

import * as React from "react";
import Button from "react-bootstrap/Button";
import ButtonReact from "@mui/material/Button";
import Form from "react-bootstrap/Form";
import Alert from "@mui/material/Alert";
import axios from "axios";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

function Register() {
  const [isRegistered, setRegistered] = React.useState(false);
  const [validated, setValidated] = React.useState(false);
  const [isDisabled, setDisabled] = React.useState(false);
  const [isDisabledLoader, setDisabledLoader] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    contact: "",
    state: "",
    city: "",
    address: "",
    username: "",
    profession: "",
    dob: "",
    working_place: "",
    course: "",
  });
  const navigate = useNavigate();

  async function handleRegistration(event) {
    event.preventDefault();
    setDisabledLoader(true);
    setDisabled(true);

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else if (
      // Add additional checks for all the required fields here
      !formData.name ||
      !formData.contact ||
      !formData.state ||
      !formData.city ||
      !formData.address ||
      !formData.username ||
      !formData.profession ||
      !formData.dob ||
      !formData.working_place ||
      !formData.course
    ) {
      event.stopPropagation();
    } else {
      // If the form is valid and all required fields are filled, proceed with the API request
      try {
        const response = await axios.post(
          "https://davaivala.shop/register_user/",
          {
            // Send data from the form
            name: formData.name,
            contact: formData.contact,
            city: formData.city,
            state: formData.state,
            address: formData.address,
            username: formData.username,
            dob: formData.dob,
            profession: formData.profession,
            working_place: formData.working_place,
            course: formData.course,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        localStorage.setItem("username", formData.username);

        // If the request is successful, set the registration flag
        setRegistered(true);

        // Navigate to the next component
        navigate("/login");

        // Optionally, you can handle the API response data as needed
        console.log("API Response:", response.data.status);
      } catch (error) {
        // Handle any errors that occur during the request
        console.error("Failed to make request: ", error.message);
      }
    }

    setDisabled(false);
    setValidated(true);
    setDisabledLoader(false);
  }

  return (
    <div className="register">
      <Alert
        severity="success"
        sx={{ display: isRegistered ? "block" : "none", marginBottom: "2rem" }}
      >
        You have been successfully Registerd!
      </Alert>

      <h3>Register Yourself</h3>
      <Form noValidate validated={validated} onSubmit={handleRegistration}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            autoComplete="off"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Form.Control.Feedback type="invalid">
            *Name is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicContact">
          <Form.Label>Contact Details</Form.Label>
          <Form.Control
            required
            type="text"
            autoComplete="off"
            placeholder="Enter your Contact"
            value={formData.contact}
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value })
            }
          />
          <Form.Control.Feedback type="invalid">
            *Contact Details are required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicState">
          <Form.Label>State</Form.Label>
          <Form.Control
            required
            type="text"
            autoComplete="off"
            placeholder="Enter your State"
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
          />
          <Form.Control.Feedback type="invalid">
            *State is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            required
            type="text"
            autoComplete="off"
            placeholder="Enter your City"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
          <Form.Control.Feedback type="invalid">
            *City is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type="text"
            autoComplete="off"
            placeholder="Enter Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
          <Form.Control.Feedback type="invalid">
            *Address is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            autoComplete="off"
            placeholder="Enter your Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <Form.Control.Feedback type="invalid">
            *Username is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>Profession</Form.Label>
          <Form.Select
            required
            aria-label="Default select example"
            value={formData.profession}
            onChange={(e) =>
              setFormData({ ...formData, profession: e.target.value })
            }
          >
            <option value="" disabled>
              Choose a Profession
            </option>
            <option value="Student">Student</option>
            <option value="Self Employed">Self Employed</option>
            <option value="Freelancer">Freelancer</option>
            <option value="Owner">Owner</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            *Profession is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDOB">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            required
            type="date"
            autoComplete="off"
            placeholder="dd-mm-yyyy"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          />
          <Form.Control.Feedback type="invalid">
            *Date of Birth is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Working Place</Form.Label>
          <Form.Control
            required
            type="text"
            autoComplete="off"
            placeholder="Enter your working place"
            value={formData.working_place}
            onChange={(e) =>
              setFormData({ ...formData, working_place: e.target.value })
            }
          />
          <Form.Control.Feedback type="invalid">
            *Working Place is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Course</Form.Label>
          <Form.Control
            required
            type="text"
            autoComplete="off"
            placeholder="Enter your Course"
            value={formData.course}
            onChange={(e) =>
              setFormData({ ...formData, course: e.target.value })
            }
          />
          <Form.Control.Feedback type="invalid">
            *Course is required
          </Form.Control.Feedback>
        </Form.Group>
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
              display: isDisabledLoader ? "block" : "none",
            }}
          />
        </Box>
        <Button
          sx={{ display: "flex", flexDirection: "row" }}
          variant="danger"
          disabled={isDisabled}
          type="submit"
        >
          Register
        </Button>
      </Form>
      <ButtonReact
        sx={{ fontWeight: "ligher" }}
        color="success"
        variant="text"
        onClick={() => {
          navigate("/login");
        }}
      >
        Already Registerd?
      </ButtonReact>
    </div>
  );
}

export default Register;

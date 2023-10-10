import * as React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "@mui/material/Alert";

function Register() {
  const [isRegistered, setRegistered] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    contact: "",
    state: "",
    city: "",
    address: "",
    profession: "",
    dob: "",
  });
  const [formErrors, setFormErrors] = React.useState({
    name: "",
    contact: "",
    state: "",
    city: "",
    address: "",
    profession: "",
    dob: "",
  });
  function handleRegistration(event) {
    event.preventDefault();
    const errors = validateForm(formData);
    if (Object.values(errors).every((error) => error === "")) {
      // All fields are valid, you can submit the form
      setRegistered(true);
    } else {
      // Some fields are invalid, display error messages
      setFormErrors(errors);
    }
  }

  function validateForm(data) {
    const errors = {
      name: "",
      contact: "",
      state: "",
      city: "",
      address: "",
      profession: "",
      dob: "",
    };

    // Validate each field
    if (data.name === "") {
      errors.name = "*Name is required";
    }
    if (data.contact === "") {
      errors.contact = "*Contact Details are required";
    }
    if (data.state === "") {
      errors.state = "*State is required";
    }
    if (data.city === "") {
      errors.city = "*City is required";
    }
    if (data.address === "") {
      errors.address = "*Address is required";
    }
    if (data.profession === "") {
      errors.profession = "*Profession is required";
    }
    if (data.dob === "") {
      errors.dob = "*Date of Birth is required";
    }

    return errors;
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
      <form onSubmit={handleRegistration}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <div className="error-message">{formErrors.name}</div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicContact">
            <Form.Label>Contact Details</Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder="Enter your Contact"
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
            />
            <div className="error-message">{formErrors.contact}</div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicState">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder="Enter your State"
              value={formData.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
            />
            <div className="error-message">{formErrors.state}</div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder="Enter your City"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
            <div className="error-message">{formErrors.city}</div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder="Enter Address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
            <div className="error-message">{formErrors.address}</div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>Profession</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={formData.profession}
              onChange={(e) =>
                setFormData({ ...formData, profession: e.target.value })
              }
            >
              <option>Choose a Profession</option>
              <option value="1">Student</option>
              <option value="2">Self Employed</option>
              <option value="3">Freelancer</option>
              <option value="3">Owner</option>
            </Form.Select>
            <div className="error-message">{formErrors.profession}</div>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>DOB</Form.Label>
            <Form.Control
              type="date"
              autoComplete="off"
              placeholder="dd-mm-yyyy"
              value={formData.dob}
              onChange={(e) =>
                setFormData({ ...formData, dob: e.target.value })
              }
            />
            <div className="error-message">{formErrors.dob}</div>
          </Form.Group>
          <Button variant="danger" onClick={handleRegistration} type="submit">
            Register
          </Button>
        </Form>
      </form>
    </div>
  );
}

export default Register;

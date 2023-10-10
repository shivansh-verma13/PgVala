import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the default styles
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
// import './DatePicker.css'; // Add your custom styles here

function MyDateTimePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [selectedTime, setSelectedTime] = useState("12:00"); // Initialize with a default time

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          gap: "5px",
        }}
        className="date-picker-container"
      >
        <label
          style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}
          htmlFor="date-picker"
          className="date-picker-title"
        >
          Select Date:
        </label>
        <DatePicker
          id="date-picker"
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select a date"
          className="date-picker-input"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          gap: "5px",
          marginTop: "-1rem"
        }}
        className="time-picker-container"
      >
        <label
          style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}
          htmlFor="time-picker"
          className="time-picker-title"
        >
          Select Time:
        </label>
        <TimePicker
          id="time-picker"
          onChange={handleTimeChange}
          value={selectedTime}
          clockIcon={null} // Hide the clock icon
          disableClock={true} // Disable the clock view
          format="HH:mm" // 24-hour format
          clearIcon={null} // Hide the clear icon
          className="time-picker-input"
        />
      </div>
    </div>
  );
}

export default MyDateTimePicker;

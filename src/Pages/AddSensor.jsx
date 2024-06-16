import React, { useState } from "react";
import MyNavbar from "./MyNavbar";
import "./addsensor.css";
import axios from "axios";
import SensorDetails from "./SensorDetails";

const AddSensor = () => {
  const [sensorName, setSensorName] = useState("");
  const [description, setDescription] = useState("");

  const handleSensorNameChange = (e) => {
    setSensorName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const newSensor = {
      sensorName,
      description,
    };

    try {
      const token = localStorage.getItem("token"); // Get the token from local storage

      const response = await axios.post(
        "http://localhost:8085/api/sensors",
        newSensor,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        }
      );

      if (response.status === 201) {
        console.log("New Sensor Added:", response.data);
        // Reset the form
        setSensorName("");
        setDescription("");
      } else {
        console.error("Failed to add sensor:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding sensor:", error);
    }
  };

  return (
    <div>
      <MyNavbar />
      <div className="header-row">
        <br />
        <h3 style={{ color: "blue" }}>Add Sensor</h3>
      </div>
      <div className="add-sensor-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="sensorName">Sensor Name</label>
            <input
              type="text"
              id="sensorName"
              value={sensorName}
              onChange={handleSensorNameChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
      <br />
      <br />
      <div className="tablesensors">
        <SensorDetails />
      </div>
    </div>
  );
};

export default AddSensor;

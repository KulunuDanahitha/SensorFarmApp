import React, { useEffect, useState } from "react";
import MyNavbar from "./MyNavbar";
import "./about.css";
import axios from "axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const About = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Retrieve the JWT token from local storage

    axios
      .get("http://localhost:8085/api/sensors", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      })
      .then((response) => {
        setSensorData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sensor data:", error);
      });
  }, []);

  return (
    <div className="aboutpage">
      <MyNavbar />
      <h1>Sensor Data</h1>
      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Data ID</TableCell>
                <TableCell align="right">Sensor ID</TableCell>
                <TableCell align="right">Data Value</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sensorData.map((row) => (
                <TableRow
                  key={row.data_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.data_id}
                  </TableCell>
                  <TableCell align="right">{row.sensor_id}</TableCell>
                  <TableCell align="right">{row.datavalue}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default About;

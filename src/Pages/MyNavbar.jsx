import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./mynavbar.css";

const MyNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("token"); // Remove the token from local storage
      navigate("/"); // Navigate to the home page
    }
  };

  return (
    <div className="mynavbarpage">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Home
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home/adduser">
              Add User
            </Nav.Link>
            <Nav.Link as={Link} to="/home/about">
              Sensor Data
            </Nav.Link>
            <Nav.Link as={Link} to="/home/addsensor">
              Add Sensor
            </Nav.Link>
            <Nav.Link as={Link} to="/home/chart">
              Chart
            </Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login form submitted:", username, password);
    
    try {
      const response = await axios.post("http://localhost:8085/api/login", {
        username,
        password,
      });
      console.log("Login response:", response);

      if (response.data.auth) {
        setMessage("Login successful");
        localStorage.setItem("token", response.data.token); // Store the token
        navigate("/home"); // Navigate to Home page on successful login
      } else {
        setMessage("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      if (error.response && error.response.data) {
        setMessage("Error logging in: " + error.response.data);
      } else {
        setMessage("Error logging in: " + error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {message && <p>{message}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

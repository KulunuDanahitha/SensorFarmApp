import React, { useState } from "react";
import MyNavbar from "./MyNavbar";
import axios from "axios";
import "./adduser.css"; // Import the CSS file

const Adduser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateUsername = (username) => {
    if (!username) {
      return "Username is required";
    }
    if (username.length < 3) {
      return "Username must be at least 3 characters long";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usernameValidationError = validateUsername(username);
    const passwordValidationError = validatePassword(password);

    setUsernameError(usernameValidationError);
    setPasswordError(passwordValidationError);

    if (!usernameValidationError && !passwordValidationError) {
      try {
        const token = localStorage.getItem("token"); // Get the token from local storage

        const response = await axios.post(
          "http://localhost:8085/adduser",
          {
            username,
            password,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the request headers
            },
          }
        );

        if (response.status === 201) {
          alert("User added successfully");
          setUsername("");
          setPassword("");
        }
      } catch (error) {
        console.error("There was an error adding the user:", error);
        alert("Error adding user");
      }
    }
  };

  return (
    <div>
      <MyNavbar />
      <div className="adduser-container">
        <h2>Add User</h2>
        <form onSubmit={handleSubmit} className="adduser-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {usernameError && <p className="error">{usernameError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>
          <button type="submit" className="submit-button">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Adduser;

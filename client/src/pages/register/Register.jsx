import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/config";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: undefined,
    userName: undefined,
    email: undefined,
    password: undefined,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post(
        "/auth/register",
        credentials
      );
      if (res.status === 200) {
        alert("Success!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error, "register failed");
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="userName"
            name="userName"
            required
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            onChange={handleChange}
          />
        </div>
        <button className="registerButton" type="submit" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

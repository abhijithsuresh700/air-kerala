import React, { useState } from "react";
import "./login.css";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/config";

const Login = () => {
  const [credentials, setCredentials] = useState({
    userName: undefined,
    password: undefined,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post(
        "/auth/login",
        credentials
      );
      if (res.status === 200) {
        console.log(res.data.details, "res checkkk");
        localStorage.setItem("User", JSON.stringify(res.data.details));
        alert("Success!");
        navigate("/");
      }
    } catch (error) {
      console.log(error, "error111");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={handleChange}
          />
        </div>
        <button className="loginButton" type="submit" onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

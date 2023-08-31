import React from "react";
import "./navbar.css";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const storedUserDetails = localStorage.getItem("User");
  const userDetails = JSON.parse(storedUserDetails);

  const handleLogout = () => {
    localStorage.removeItem("User");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Air Kerala</span>
        <div className="navItems">
          {userDetails && userDetails.name ? (
            <>
              <span className="userWelcome">Welcome, {userDetails.name}!</span>
              <button className="navButton" onClick={handleLogout}>
                Logout
              </button>
              <span className="myBoookings" onClick={() => navigate("/bookings")}>My Bookings</span>
            </>
          ) : (
            <>
              <button
                className="navButton"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
              <button className="navButton" onClick={() => navigate("/login")}>
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./header.css";
import {
  faBed,
  faCalendarDays,
  faPerson,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Header = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const storedUserDetails = localStorage.getItem("User");
  const userDetails = JSON.parse(storedUserDetails);

  const navigate = useNavigate();

  
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  const formatDate = (date) => {
    if (!date) return "";
    return date.format("MMMM D, YYYY");
  };

  const date = formatDate(selectedDate);

  console.log(from, to, date, passengers, "checkkkkkkkkk");
  
  const handleSearch = () => {
    if(!from || !to || !date){
       alert("Please properly select the Inputs")
      navigate("/")
      return;
    }
    // if(!to){
    //    alert("Please properly select the Inputs")
    //   navigate("/")
    //   return;
    // }
    // if(!date){
    //    alert("Please properly select the Inputs")
    //   navigate("/")
    //   return;
    // }
    if(userDetails?.name){
      navigate("/flights", { state: { from, to, date, passengers } });
    }else{
      navigate("/login")
    }
  };
  return (
    <div className="header">
      <div className="headerContainer">
        <>
          <h1 className="headerTitle">Save up to 30%* on fares</h1>
          <p className="headerDesc">Exclusive online deals</p>
          <button className="bookBtn">Book Now</button>
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPlane} className="headerIcon" />
              <input
                type="text"
                placeholder="From"
                className="headerSearchInput"
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPlane} className="headerIcon" />
              <input
                type="text"
                placeholder="To"
                className="headerSearchInput"
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    className="datepicker"
                    onChange={handleDateChange}
                    value={selectedDate}
                    PopperProps={{
                      anchorEl: {
                        current:
                          document.getElementsByClassName("datepicker")[0],
                      },
                      placement: "bottom-start",
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="headerSearchItem">
              <input 
              className="headerInput" 
              type="number" 
              placeholder="Passengers" 
              onChange={(e) => setPassengers(e.target.value)} 
              />
            </div>
            <div className="headerSearchItem">
              <button className="headerBtn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Header;

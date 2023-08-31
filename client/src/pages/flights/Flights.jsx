import React, { useEffect } from "react";
import "./flights.css";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchResults from "../../components/searchResults/SearchResults";
import axios from "axios";
import { axiosInstance } from "../../utils/config";

const Flights = () => {
  const location = useLocation();
  const [flights, setFlights] = useState([]);
  const [from, setFrom] = useState(location.state.from);
  const [to, setTo] = useState(location.state.to);
  const [passengers, setPassengers] = useState(location.state.passengers);
  const [date, setDate] = useState(location.state.date);
  console.log(location.state.date, "locationmmm");

  const routes = async () => {
    try {
      const response = await axiosInstance.get(
        `/flight/flightRoutes?from=${from}&to=${to}`
      );
      setFlights(response.data);
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  useEffect(() => {
    routes();
  }, [from, to]);

  console.log(flights, "routes");

  return (
    <div>
      <Navbar />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <div className="lsItem">
              <label>From</label>
              <input placeholder={from} type="text" />
            </div>
            <div className="lsItem">
              <label>To</label>
              <input placeholder={to} type="text" />
            </div>
            <div className="lsItem">
              <label>Passengers</label>
              <input placeholder={passengers} type="text" />
            </div>
            <div className="lsItem">
              <label>Travel Date</label>
              <span className="lsItemDate">{date}</span>
            </div>
          </div>
          <div className="listResult">
            {flights.map((item) => (
              <SearchResults flights={item} key={item._id} date={date} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;

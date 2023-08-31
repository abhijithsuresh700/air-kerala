import React, { useState } from "react";
import "./searchResults.css";
import { Link } from "react-router-dom";
import Reserve from "../reserve/Reserve";

const SearchResults = ({ flights, date }) => {
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  console.log(flights, "item check at searchresultss");


  const handleClick = () => {
      setOpenModel(true);
      // navigate("/login");
  };

  return (
    <div className="searchItem">
      <div className="siDesc">
        <span className="siCity">{flights.from}</span>
        <img className="siIcon" src="/plane.svg" alt="Plane Icon" />
        <span className="siCity">{flights.to}</span>
      </div>
        <div className="siFlightDetails">
          <span className="siFlightName">{flights.name}</span>
          <span className="siFlightType">{flights.type}</span>
        </div>
      <div className="siAdditionalDetails">
        <div className="siClass">
          <span className="siClassName">Economy</span>
          <span className="siPrice">{flights.price}</span>
        </div>
        <div className="siClass">
          <span className="siClassName">Business Class</span>
          <span className="siPrice">Currently Not Available</span>
        </div>
      </div>
      <div className="siButton">
        <button onClick={handleClick} className="bookButton">Book Now</button>
      </div>
      {openModel && <Reserve setOpen={setOpenModel} flightId={flights._id} date={date}/>}
    </div>
  );
};

export default SearchResults;

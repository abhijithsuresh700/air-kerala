import React, { useEffect, useState } from "react";
import "./reserve.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/config";

const Reserve = ({ setOpen, flightId, date }) => {
  const [seatNumbers, setSeatNumbers] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [dates, setDates] = useState([]);
  const navigate = useNavigate();
  const storedUserDetails = localStorage.getItem("User");
  const userDetails = JSON.parse(storedUserDetails);

  const userId = userDetails._id;
  console.log(userId,"userId check")

  const seatss = async () => {
    try {
      const res = await axiosInstance.get(
        `/flight/seat/${flightId}`
      );
      console.log(res.data, "res checkk");
      const seatNumberssssss = res.data[0].seatNumbers;
      setSeatNumbers(seatNumberssssss);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(date, "date check");

  useEffect(() => {
    seatss();
  }, [flightId]);

  const booking = {
    user: userId,
    flight: flightId,
    seat: selectedSeats,
    date: date,
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedSeats(
      checked
        ? [...selectedSeats, value]
        : selectedSeats.filter((item) => item !== value)
    );
  };

  //   const isAvailable = (seatNumber) => {
  //     const isFound = seatNumber.unavailableDates.some((date) =>
  //       alldates.includes(new Date(date).getTime())
  //     );

  //     return !isFound;
  //   };

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedSeats.map(async () => {
          const book = await axios.post(
            `http://localhost:4000/api/booking`,
            booking
          );
          if (book.status === 200) {
            alert("Success!");
            setOpen(false);
            navigate("/");
          }
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  console.log(seatNumbers, " seats1111111111111");

  console.log(flightId, "flightId check");

  console.log(selectedSeats, "selectedSeats check");
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your seat:</span>
        {seatNumbers.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rSelectRooms">
              <div className="room">
                <label>{item.number}</label>
                <input
                  type="checkbox"
                  value={item._id}
                  onChange={handleSelect}
                />
              </div>
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;

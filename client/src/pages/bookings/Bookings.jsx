import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import BookingCard from "../../components/bookingCard/BookingCard";
import { axiosInstance } from "../../utils/config";

const Bookings = () => {
  const storedUserDetails = localStorage.getItem("User");
  const userDetails = JSON.parse(storedUserDetails);
  const userId = userDetails._id;
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await axiosInstance(`/booking/${userId}`);
      console.log(response.data, "res checkk at bookings");
      setBookings(response.data)
    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log(data, "data check");
    //     //   setBookings([data]); // Assuming the response is a single booking object
    //   } else {
    //     console.error("Failed to fetch bookings");
    //   }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  console.log(bookings,"1111111111111111")

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <Navbar />
      <BookingCard userId={userId} bookings={bookings}/>
    </div>
  );
};

export default Bookings;

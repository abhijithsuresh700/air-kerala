import React, { useState } from "react";
import "./bookingCard.css";

const BookingCard = ({ bookings, userId }) => {
  console.log(bookings, "bookings check at carddddddddddddd");

  //    const lastSixDigits = bookings?.bookingId.slice(-6);
  return (
    <div className="booking-card">
      {bookings.map((bookings) => (
        <>
          <div className="booking-header" key={bookings._id}>
            <div className="airline-name">Air Kerala</div>
            <div className="booking-id">Booking ID: {bookings._id}</div>
          </div>
          <div className="booking-info">
            <div className="customer-name">
              Customer Name: {bookings?.user.name}
            </div>
            <div className="route">
              From: {bookings?.flight.from} - To: {bookings?.flight.to}
            </div>
            <div className="bookingdate">Date: {bookings?.date}</div>
          </div>
        </>
      ))}
    </div>
  );
};

export default BookingCard;

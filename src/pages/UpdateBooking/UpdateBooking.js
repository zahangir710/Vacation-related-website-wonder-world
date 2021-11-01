import React, { useEffect, useState } from "react";
import YourRides from "../YourRides/YourRides";
const UpdateBooking = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://spooky-ghoul-71754.herokuapp.com/booking")
      .then((res) => res.json())
      .then((result) => {
        setBookings(result);
        console.log(result);
      });
  }, []);
  return (
    <div className="container pb-5">
      <h1 className="text-center">Update Booking</h1>
      <div className="display">
        {bookings.map((booking) => (
          <YourRides key={booking.ride._id} booking={booking}></YourRides>
        ))}
      </div>
    </div>
  );
};

export default UpdateBooking;

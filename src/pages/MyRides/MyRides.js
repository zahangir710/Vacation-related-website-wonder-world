import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import ShowMyRides from "../showMyRides/ShowMyRides";
const MyRides = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://spooky-ghoul-71754.herokuapp.com/booking")
      .then((res) => res.json())
      .then((result) => {
        setBookings(result);
      });
  }, []);
  const mybookings = bookings.filter((booking) => booking.user === user.email);

  return (
    <div className="container pb-5">
      <h1 className="text-center">My Rides</h1>
      <div className="display">
        {mybookings.map((booking) => (
          <ShowMyRides key={booking.ride._id} booking={booking}></ShowMyRides>
        ))}
      </div>
    </div>
  );
};

export default MyRides;

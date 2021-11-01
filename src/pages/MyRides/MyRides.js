import React, { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";

const MyRides = () => {
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://spooky-ghoul-71754.herokuapp.com/mybooking/${user.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [user.email]);
  return (
    <div>
      <p>This is my rides</p>
    </div>
  );
};

export default MyRides;

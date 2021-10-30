import React from "react";
import { Container, Spinner } from "react-bootstrap";
import useRidesData from "../../Hooks/useRidesData";
import Ride from "../Ride/Ride";
import "./Rides.css";

const Rides = () => {
  const [rides, isLoadding] = useRidesData();
  if (isLoadding) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="warning" />
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="rides-bg">
      <h1 className="text-light text-center pt-5">Fun Rides you can Enjoy</h1>
      <p className="text-light text-center py-4">For Kids and Adults</p>
      <Container className="display py-5">
        {rides.map((ride) => (
          <Ride key={ride._id} ride={ride}></Ride>
        ))}
      </Container>
    </div>
  );
};

export default Rides;

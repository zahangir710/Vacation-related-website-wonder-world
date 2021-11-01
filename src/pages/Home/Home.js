import React from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useRidesData from "../../Hooks/useRidesData";
import Ride from "../Ride/Ride";
import "./Home.css";

const Home = () => {
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
    <div className="pb-5">
      <div className="home-bg text-center text-light">
        <h1 className="text-warning">Wonder World</h1>
        <p>The Best Holiday Destination for your family</p>
      </div>
      <Container className="display my-5">
        {rides.slice(0, 4).map((ride) => (
          <Ride key={ride._id} ride={ride}></Ride>
        ))}
      </Container>
      <div className="text-center">
        <Link to="/rides">
          <Button variant="warning">Load All Rides</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

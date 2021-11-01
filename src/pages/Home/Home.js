import React from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useRidesData from "../../Hooks/useRidesData";
import Foods from "../Foods/Foods";
import Offers from "../Offers/Offers";
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
      <h4 className="text-center my-5">Check out our Fun Rides</h4>
      <Container className="display my-5">
        {rides.slice(0, 4).map((ride) => (
          <Ride key={ride._id} ride={ride}></Ride>
        ))}
      </Container>
      <div className="text-center mb-5">
        <Link to="/rides">
          <Button variant="warning">Load All Rides</Button>
        </Link>
      </div>
      <Offers></Offers>
      <Foods></Foods>
    </div>
  );
};

export default Home;

import Button from "@restart/ui/esm/Button";
import React from "react";
import { Carousel } from "react-bootstrap";
import "./Offers.css";

const Offers = () => {
  return (
    <div className="container offer-details">
      <div className="mt-5">
        <h3>
          Special Family offers <br />
          on
          <span className="text-warning"> Weekends</span>
        </h3>
        <Button className="bg-warning rounded mt-3" variant="warning">
          Find More
        </Button>{" "}
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-bg"
            src="https://i.ibb.co/Kxp9NFS/jeremy-bezanger-ADFXG4gt-N3-E-unsplash.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="text-light fw-bolder">
            <h3>Special Discount For Group Entry Tickets</h3>
            <p>Limited Time offers</p>
            <p>
              <small>conditions apply</small>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-bg"
            src="https://i.ibb.co/tc5DpJs/kevin-jarrett-gn-TAg-Dzh-9k-unsplash.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="text-light fw-bolder">
            <h3>Special Discount For Group Rides on Friday</h3>
            <p>Limited Time offers</p>
            <p>
              <small>conditions apply</small>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Offers;

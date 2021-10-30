import React from "react";
import { Button, Card } from "react-bootstrap";

const Ride = (props) => {
  const { name, img, price, _id } = props.ride;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>${price}</p>
        </Card.Text>
        <Button variant="warning">Book Ticket</Button>
      </Card.Body>
    </Card>
  );
};

export default Ride;

import Button from "@restart/ui/esm/Button";
import { FaPlus, FaMinus } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import { Redirect, useParams } from "react-router";
import "./ConfirmBooking.css";
import { Link } from "react-router-dom";

const ConfirmBooking = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [ride, setRide] = useState({});
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch(`https://spooky-ghoul-71754.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRide(data);
      });
  }, [id]);

  const handleCountUp = () => {
    setCount((prevCount) => prevCount + 1);
    setTotalPrice((previousTotal) => previousTotal + parseFloat(ride.price));
  };
  const handleCountDown = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      setTotalPrice((previousTotal) => previousTotal - parseFloat(ride.price));
    } else {
      setCount(0);
      setTotalPrice(0);
      alert("Zero limit reached");
    }
  };
  const handleConfirmBooking = () => {
    const proceed = window.confirm("Do you want to proceed?");
    if (count < 1) {
      alert("Number of ticket can not be 0");
    } else {
      if (proceed) {
        const { _id, ...bookedRide } = { ride };
        bookedRide.count = count;
        bookedRide.totalPrice = totalPrice;
        bookedRide.user = user.email;
        bookedRide.status = "pending";
        console.log(bookedRide);
        fetch("https://spooky-ghoul-71754.herokuapp.com/booking", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(bookedRide),
        })
          .then((res) => {
            console.log(res);
            if (res.headers.ok) {
              setCount(0);
              setTotalPrice(0);
              alert("Successfully Booked Tickets");
            }
          })
          .finally(() => <Redirect to="/rides" />);
      }
    }
  };

  return (
    <Container className="padding d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={ride.img} />
        <Card.Body>
          <Card.Title>{ride.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Audience Type: {ride.type}</ListGroupItem>
          <ListGroupItem>${ride.price}</ListGroupItem>
          <ListGroupItem>
            Number of Ticket: {count}
            <Button className="mx-2 border-0" onClick={handleCountUp}>
              <FaPlus />
            </Button>
            <Button className="border-0" onClick={handleCountDown}>
              <FaMinus />
            </Button>
          </ListGroupItem>
          <ListGroupItem>${totalPrice.toFixed(2)}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="">
            <Button
              onClick={handleConfirmBooking}
              variant="warning"
              className="rounded bg-warning"
            >
              Confirm
            </Button>
          </Card.Link>
          <Card.Link disabled href="">
            <Link to="/rides">
              <Button className="rounded bg-dark text-light" variant="dark">
                Cancle
              </Button>
            </Link>
          </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ConfirmBooking;

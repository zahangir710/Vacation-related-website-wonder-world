import Button from "@restart/ui/esm/Button";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
const YourRides = (props) => {
  const { booking } = props;
  const { ride } = booking;
  const handleUpdateStatus = (id) => {
    const proceed = window.confirm("Do you want to proceed?");
    if (proceed) {
      fetch(`https://spooky-ghoul-71754.herokuapp.com/booking/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Status Updated");
          }
        });
    }
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={ride.img} />
      <Card.Body>
        <Card.Title>Booked by: {booking.user}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Ride: {ride.name}</ListGroupItem>
        <ListGroupItem>Ride price:{ride.price}</ListGroupItem>
        <ListGroupItem>Number of Visitors:{booking.count}</ListGroupItem>
        <ListGroupItem>ToTal Price: ${booking.totalPrice}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <p>
          Booking Status: <span className="text-success">{booking.status}</span>{" "}
        </p>
        <Button
          onClick={() => handleUpdateStatus(booking._id)}
          className="rounded bg-warning"
          variant="warning"
        >
          update Status
        </Button>
      </Card.Body>
    </Card>
  );
};

export default YourRides;

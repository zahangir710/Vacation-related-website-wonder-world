import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Profile.css";

const Profile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <Card
      className=" container margin-top-bottom text-center"
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" className="py-3" src={user.photoURL} />
      <Card.Body>
        <Card.Title>{user?.displayName}</Card.Title>
        <Card.Text>
          <p>{user?.phoneNumber}</p>
        </Card.Text>
        <Link to="/home">
          <Button className="rounded bg-warning my-5" variant="warning">
            Go to Home
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Profile;

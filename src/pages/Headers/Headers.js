import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/UseFirebase";
import Logo from "../../Images/logo.png";
import "./Headers.css";

const Headers = () => {
  const { user, Logout } = useFirebase();
  console.log(user);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/rides">
              Rides
            </Nav.Link>
            <Nav.Link as={Link} to="/visit">
              Plan Your Visit
            </Nav.Link>
            <Nav.Link as={Link} to="/your_rides">
              Your Rides
            </Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <Nav.Link onClick={Logout} as={Link} to="">
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {user ? (
              <Nav.Link as={Link} to="/" eventKey={2}>
                <img className="img-size me-2" src={user.photoURL} alt="" />
                {user?.displayName}
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/profile" eventKey={2}>
                Profile
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Headers;

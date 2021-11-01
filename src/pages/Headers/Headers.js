import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import Logo from "../../Images/logo.png";
import "./Headers.css";

const Headers = () => {
  const { user, Logout } = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} activeClassName="selected" to="/home">
          <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="custom-border"
              activeClassName="selected"
              as={NavLink}
              to="/home"
            >
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} activeClassName="selected" to="/rides">
              Rides
            </Nav.Link>
            <Nav.Link as={NavLink} activeClassName="selected" to="/myrides">
              My Rides
            </Nav.Link>
            <Nav.Link
              className="custom-border"
              activeClassName="selected"
              as={NavLink}
              to="/visit"
            >
              Plan Your Visit
            </Nav.Link>
            <NavDropdown title="Admin" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/addrides">
                Add Rides
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/update_booking">
                Update booking
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {user ? (
              <Nav.Link
                onClick={Logout}
                className="custom-border mt-1"
                as={NavLink}
                to=""
              >
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link
                className="custom-border"
                activeClassName="selected"
                as={NavLink}
                to="/login"
              >
                Login
              </Nav.Link>
            )}
            {user ? (
              <Nav.Link as={NavLink} to="/profile" eventKey={2}>
                <img className="img-size me-2" src={user.photoURL} alt="" />
                {user?.displayName}
              </Nav.Link>
            ) : (
              <Nav.Link
                as={NavLink}
                className="custom-border"
                activeClassName="selected"
                to="/profile"
                eventKey={2}
              >
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

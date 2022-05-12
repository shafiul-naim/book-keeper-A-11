import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
      signOut(auth);
    };
  return (
    <header className="nav-style">
      <Navbar
        className=" position-fixed w-100 "
        collapseOnSelect
        expand="lg"
        bg="success"
        sticky="top"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Book keeper
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#inventory">Inventory</Nav.Link>
              <Nav.Link href="home#blogs">Blogs</Nav.Link>
              <Nav.Link href="home#gallery">Gallery</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
              {user ? (
              <button
                className="btn btn-link text-white text-decoration-none"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            ) : (
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
            )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

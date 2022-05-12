import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
              {/* {user ? (
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
            )} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

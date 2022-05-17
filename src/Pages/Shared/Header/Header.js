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
          <Navbar.Brand  as={Link} to="/">
            <strong className="title">Book</strong>{" "}
            <strong className="title">Keeper</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#inventory" className="my-auto">Inventory</Nav.Link>
              <Nav.Link href="home#books" className="my-auto">Books</Nav.Link>
              <Nav.Link href="home#inquiry" className="my-auto">Inquiry</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="my-auto" as={Link} to="blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className="my-auto" as={Link} to="about">
                About
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link className="my-auto" as={Link} to="additem">
                    Add Item
                  </Nav.Link>
                  <Nav.Link className="my-auto" as={Link} to="manageInventories">
                    Manage Inventory
                  </Nav.Link>
                  <Nav.Link className="my-auto" as={Link} to="myitems">
                    My Items
                  </Nav.Link>
                </>
              )}
              {user ? (
                <div className="d-flex px-2 align-items-center justify-content-center">
                  <p className="text-warning fs-5 my-auto">{user.displayName}</p>
                <button
                  className="btn btn-link  text-decoration-none fs-5 text-warning"
                  onClick={handleSignOut}
                >
                  Sign out
                </button>
                </div>
              ) : (
                <Nav.Link className="text-warning fs-5 my-auto" as={Link} to="login">
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

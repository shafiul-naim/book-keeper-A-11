import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";


const Footer = () => {
  const [user] = useAuthState(auth);
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left ">
        <div className="row text-center text-md-left">
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Book keeper
            </h5>
            <p>
              This website a book inventory management system.Here you can see the book name, description, price, seller name, quantity etc. You can add,
              delete, update those book information as you wish.{" "}
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
          <h5 className="text-uppercase font-weight-bold text-warning">
              Useful links
            </h5>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="">
              <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="d-flex flex-column mx-auto">
                    <Nav.Link className="text-white" href="home#inventory">Inventory</Nav.Link>
                    <Nav.Link className="text-white" href="home#blogs">Blogs</Nav.Link>
                    {user && (
                      <>
                        <Nav.Link
                          className="text-white"
                          style={{ textDecoration: "none" }}
                          as={Link}
                          to="additem"
                        >
                          Add Item
                        </Nav.Link>
                        <Nav.Link
                          className="text-white"
                          style={{ textDecoration: "none" }}
                          as={Link}
                          to="manageInventories"
                        >
                          Manage Inventory
                        </Nav.Link>
                        <Nav.Link
                          className="text-white"
                          style={{ textDecoration: "none" }}
                          as={Link}
                          to="myitems"
                        >
                          My Items
                        </Nav.Link>
                      </>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Contacts
            </h5>
            <p>
              <i className="fas fa-home ms-3"></i>Sylhet, 3100, Bangladesh
            </p>
            <p>
              <i className="fas fa-envelope ms-3"></i>shafiul.naim@gmail.com
            </p>
            <p>
              <i className="fas fa-phone ms-3"></i>+880 011111999998
            </p>
            <p>
              <i className="fas fa-print ms-3"></i>+01 222 333 44
            </p>
            <p>
            <i className="fa-solid fa-file-circle-question"></i>+01 222 333 44
            </p>
          </div>
          <hr className="mb-4" />
          <div className="row align-item-center">
            <p>
              <small> &copy; Copyright {year} . All right reserved by: </small>
              <button
                className="text-info bg-dark border-0"
              >
                <strong> Shafiul Islam</strong>
              </button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

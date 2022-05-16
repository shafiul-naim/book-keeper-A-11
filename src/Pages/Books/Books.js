import React, { useState } from "react";
import { Button, Card, ListGroup, Modal, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Books = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container my-5">
        <div className="container my-5 py-5">
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <div className="card card-body border-0 shadow ">
                <div className="row">
                  <div className="col">
                    <div
                      className="card card-body "
                      style={{ backgroundColor: "#0f4f3f" , marginBottom:"-50px"}}
                    >
                      <h5 className="mx-auto fs-2 text-white ">Books</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Old books</Nav.Link>
            </Nav.Item>
            <Nav.Link as={Link} to="available">
              All books
            </Nav.Link>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Buy old books</Card.Title>
          <Card.Text>
            Some of the old books are available in our inventory.You can buy
            these at our warehouse.
          </Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Book list
          </Button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title> Old book list</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ListGroup>
                <ListGroup.Item>Inside the Machine</ListGroup.Item>
                <ListGroup.Item>Structure and Interpretation of Computer Programs</ListGroup.Item>
                <ListGroup.Item>Code: The Hidden Language of Computer Hardware and Software</ListGroup.Item>
                <ListGroup.Item>Cracking the Coding Interview: 189 Programming Questions and Solutions</ListGroup.Item>
                <ListGroup.Item>Programming Pearls</ListGroup.Item>
              </ListGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Books;

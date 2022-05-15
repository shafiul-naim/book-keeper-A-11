import React from "react";
import { Button, Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Books = () => {
  return (
    <div className="container my-5">
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Old book</Nav.Link>
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
          <Button variant="primary">Book list</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Books;

import React from "react";
import { Card } from "react-bootstrap";

const Blogs = () => {
  return (
    <div id="blogs" className="container my-4">
      <h2 className="text-center text-primary my-5">Blogs</h2>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Card
          className="col  mx-auto"
          border="secondary"
          style={{ width: "18rem" }}
        >
          <Card.Header>Difference between javascript and nodejs</Card.Header>
          <Card.Body>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="col  mx-auto"
          border="secondary"
          style={{ width: "18rem" }}
        >
          <Card.Header>
            When should you use nodejs and when should you use mongodb
          </Card.Header>
          <Card.Body>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="col  mx-auto"
          border="secondary"
          style={{ width: "18rem" }}
        >
          <Card.Header>
            What is the purpose of jwt and how does it work
          </Card.Header>
          <Card.Body>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Blogs;

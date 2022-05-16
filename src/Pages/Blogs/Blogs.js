import React from "react";
import { Card } from "react-bootstrap";

const Blogs = () => {
  return (
    <div id="blogs" className="container pt-3">
      <div className="container mb-3 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-3">
            <div className="card card-body border-0 shadow ">
              <div className="row">
                <div className="col">
                  <div
                    className="card card-body "
                    style={{
                      backgroundColor: "#0f4f3f",
                      marginBottom: "-50px",
                    }}
                  >
                    <h5 className="mx-auto fs-2 text-white ">Blogs </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-2 my-4 w-100">
        <Card
          className="col  mx-auto"
          border="secondary"
          style={{ width: "24rem" }}
        >
          <Card.Header>Difference between javascript and nodejs</Card.Header>
          <Card.Body>
            <Card.Text>
              <strong>NodeJS :</strong>
              <br /> It is a cross-platform and open source Javascript runtime
              environment. It is mostly used on the server-side.It also allows
              Javascript code to run outside the browser. Its with a lot of
              modules and mostly used in web development. <br />
              <strong>JavaScript :</strong> <br /> It is a Scripting language.
              It can be said that Javascript is the updated version of the ECMA
              script.It is basically used on the client-side. it is a high-level
              programming language that uses the concept of Oops but it is based
              on prototype inheritance.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="col  mx-auto"
          border="secondary"
          style={{ width: "24rem" }}
        >
          <Card.Header>
            When should you use nodejs and when should you use mongodb
          </Card.Header>
          <Card.Body>
            <Card.Text>
              NodeJS is a Javascript runtime environment. If we want to run JS
              outside of browser node.js can do that. We mostly use node.js in
              the server side and for the backend development.Node.js is
              especially suited for applications where you'd like to maintain a
              persistent connection from the browser back to the server.
              <br />
              MongoDB is a great database for web applications. With MongoDB's
              schemaless document-database, we can store all of a user's
              information together. When we would allow for a single query to a
              single collection we use mongoDb and the front-end can deal with
              displaying/editing the data.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="col  mx-auto"
          border="secondary"
          style={{ width: "24rem" }}
        >
          <Card.Header>
            What is the purpose of jwt and how does it work
          </Card.Header>
          <Card.Body>
            <Card.Text>
              The purpose of JWT to secure the APIs. It is an open standard used
              to share security information between a client and a server. Each
              JWT contains encoded JSON objects and a set of claims. Once
              decoded, we will get two JSON strings: 1. The header and the
              payload. 2. The signature. The payload contains the claims.The signature ensures that the token hasn’t been changed.the receiving party verifies that with secret keys the header and payload match the signature. 


            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Blogs;

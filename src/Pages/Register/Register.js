import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const navigateToLogin = (event) => {
    navigate("/login");
  };
  return (
    <div className="mt-5 pt-5 container  mx-auto">
      <h2 className="mt-2 text-info text-center">This is register page</h2>
      <Form className=" my-3 w-75 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={nameRef}
            type="name"
            placeholder="Enter your name"
            className=""
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>

      <p className="text-center">
        Already have an account..?{" "}
        <Link
          to="/login"
          className="text-info text-decoration-none "
          onClick={navigateToLogin}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;

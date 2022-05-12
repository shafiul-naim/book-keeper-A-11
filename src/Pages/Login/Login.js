import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // signInWithEmailAndPassword(email, password);

  
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };
  return (
    <div className="mt-5 pt-5 container  mx-auto">
      <h2 className="mt-2 text-info text-center">Please login</h2>
      <Form className="w-75 mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>


      <p className="w-50 mx-auto my-2">
        Want to mange your inventory ?{" "}
        <Link
          to="/register"
          className="text-primary text-decoration-none "
          onClick={navigateRegister}
        >
          Please Register
        </Link>
      </p>
      <p className="  w-50 mx-auto my-2">
        Forget password..?
        <button
          className="btn btn-link text-primary text-decoration-none "
        //   onClick={resetPassword}
        >
          Reset password
        </button>
      </p>
    </div>
  );
};

export default Login;

import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const navigateToLogin = (event) => {
    navigate("/login");
  };

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating] = useUpdateProfile(auth);

  if (loading || updating) {
    return <Loading></Loading>;
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/home");
  };

  if (user) {
    console.log(user);
    navigate("/home");
  }

  return (
    <div className=" pt-3 container  mx-auto">
      <div className="container mb-3 py-5">
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <div className="card card-body border-0 shadow ">
                <div className="row">
                  <div className="col">
                    <div
                      className="card card-body "
                      style={{ backgroundColor: "#0f4f3f" , marginBottom:"-50px"}}
                    >
                      <h5 className="mx-auto fs-2 text-white ">Register</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <Form className=" my-3 w-50 mx-auto d-flex flex-column" onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={nameRef}
            type="name"
            placeholder="Enter your name"
            className="mb-3 rounded-pill p-2 border-0"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            className="mb-3 rounded-pill p-2 border-0"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="mb-3 rounded-pill p-2 border-0"
            required
          />
        </Form.Group>

        <Button className="text-center mx-auto rounded-pill px-3 py-2" variant="success" type="submit">
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
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;

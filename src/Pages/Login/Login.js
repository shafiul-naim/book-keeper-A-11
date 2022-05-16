import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent!  Check your mail");
    } else {
      toast("Please enter your email");
    }
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
    console.log(user);
  }

  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
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
                      <h5 className="mx-auto fs-2 text-white ">Please Login </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      <Form className="w-50 mx-auto d-flex flex-column" onSubmit={handleSubmit}>
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
          Login
        </Button>
      </Form>



      {errorElement}
      <p className="w-50 mx-auto my-4">
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
          onClick={resetPassword}
        >
          Reset password
        </button>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;

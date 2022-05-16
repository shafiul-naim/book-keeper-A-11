import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import "react-toastify/dist/ReactToastify.css";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="container py-5 mt-3 d-flex flex-column align-items-center bg-white w-50">
        <p>
          <HiOutlineMailOpen size={72} className="text-dark"></HiOutlineMailOpen>
        </p>
        <h3 className="text-success">Please verify your email</h3>
        <p className="w-100 fs-5 py-3 text-center">
          To managing data, add, delete and for other feature, we need to verify
          your email ID
        </p>
        <button
          className="btn btn-success fs-5 shadow"
          onClick={async () => {
            await sendEmailVerification();
            alert("Verification email has been sent. Please check your email");
          }}
        >
          Click to verify
        </button>
      </div>
    );
  }
  return children;
};

export default RequireAuth;

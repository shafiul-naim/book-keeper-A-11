import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import "react-toastify/dist/ReactToastify.css";

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
      }
    
      if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div>
          <h3 className="text-danger">Your email is not verified</h3>
          <h3 className="text-success">Please verify your email</h3>
          <button
          className="btn btn-primary"
            onClick={async () => {
              await sendEmailVerification();
              toast('Sent email');
            }}
          >
            Send verification email again
          </button>
        </div>;
      }
    return children;
};

export default RequireAuth;
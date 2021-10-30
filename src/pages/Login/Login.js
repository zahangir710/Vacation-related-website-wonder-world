import Button from "@restart/ui/esm/Button";
import React from "react";
import useFirebase from "../../Hooks/UseFirebase";

const Login = () => {
  const { googleSignIn, user, error } = useFirebase();
  return (
    <div className="container text-center mt-5">
      <Button onClick={googleSignIn} variant="outline-dark">
        Sign in with Google
      </Button>
      <p>or</p>
      <Button onClick={googleSignIn} variant="outline-dark">
        Admin Login
      </Button>
      <p>{error}</p>
      <p>{user?.displayName}</p>
      <p>{user?.email}</p>
    </div>
  );
};

export default Login;

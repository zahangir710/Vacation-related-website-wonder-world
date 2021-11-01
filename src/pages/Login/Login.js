import Button from "@restart/ui/esm/Button";
import React from "react";
import { Redirect } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { googleSignIn, error, user } = useAuth();
  if (user) {
    return <Redirect to="/home" />;
  }
  return (
    <div className="container text-center spacing">
      <Button
        className="rounded bg-warning mb-3"
        onClick={googleSignIn}
        variant="outline-dark"
      >
        Sign in with Google
      </Button>
      <p>or</p>
      <Button
        className="rounded bg-success text-light mb-5"
        onClick={googleSignIn}
        variant="outline-dark"
      >
        Admin Login
      </Button>
      <p className="text-danger">{error}</p>
    </div>
  );
};

export default Login;

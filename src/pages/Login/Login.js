import Button from "@restart/ui/esm/Button";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { googleSignIn } = useAuth();

  return (
    <div className="container text-center padding">
      <Button
        className="rounded bg-warning mb-3"
        onClick={googleSignIn}
        variant="outline-dark"
      >
        Sign in with Google
      </Button>
      <p>or</p>
      <Button
        className="rounded bg-success text-light"
        onClick={googleSignIn}
        variant="outline-dark"
      >
        Admin Login
      </Button>
    </div>
  );
};

export default Login;

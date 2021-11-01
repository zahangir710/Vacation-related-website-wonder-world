import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center padding">
      <h1>404 Page Not Found</h1>
      <Link to="/home">
        <Button className="rounded bg-warning my-5" variant="warning">
          Go to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;

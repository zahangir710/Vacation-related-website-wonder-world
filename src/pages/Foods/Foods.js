import Button from "@restart/ui/esm/Button";
import React from "react";
import "./Foods.css";

const Foods = () => {
  return (
    <div className="container food-div mt-5">
      <div className="img-div">
        <img
          src={"https://i.ibb.co/FhZkrxx/nas-mato-jn-WGWSWTVq-U-unsplash.jpg"}
          alt=""
        />
      </div>
      <div className="mt-5 text-center">
        <h3 className="ms-2">
          Perfect Food, <br />{" "}
          <span className="text-warning">
            {" "}
            completes your <br /> vacation
          </span>
        </h3>
        <Button className="bg-warning rounded mt-3 ms-2" variant="warning">
          Find locations
        </Button>{" "}
      </div>
    </div>
  );
};

export default Foods;

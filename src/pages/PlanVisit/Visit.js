import React from "react";
import "./Visit.css";
const Visit = () => {
  return (
    <div>
      <div className="visit-bg text-center text-light padding-text">
        <h3 className="p-5">We are Open 7 Days a Week</h3>
      </div>
      <div className="opening-hours text-center container">
        <div className="days text-dark py-5">
          <h5 className="mb-4">Days</h5>
          <p>Monday</p>
          <p>Tuesday</p>
          <p>Wednesday</p>
          <p>Thrusday</p>
          <p>Friday</p>
          <p>Saturday</p>
          <p>Sunday</p>
        </div>
        <div className="times py-5">
          <h5 className="mb-4">Opening Hours</h5>
          <p>10:00 - 18:00</p>
          <p>10:00 - 18:00</p>
          <p>10:00 - 18:00</p>
          <p>10:00 - 18:00</p>
          <p>10:00 - 20:00</p>
          <p>10:00 - 20:00</p>
          <p>10:00 - 20:00</p>
        </div>
        <div className="holidays py-5">
          <h5 className="mb-4">Public Holidays (Closed)</h5>
          <p>Dec 21</p>
          <p>Nov 16</p>
          <p>Sep 12</p>
          <p>Apr 12</p>
          <p>Feb 12</p>
        </div>
      </div>
    </div>
  );
};

export default Visit;

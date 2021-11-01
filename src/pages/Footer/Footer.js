import React from "react";
import {
  FaFacebookSquare,
  FaGooglePlusG,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="footer container text-center">
        <div className="icons py-5">
          <h6 className="text-light mb-4">Find us on</h6>
          <FaFacebookSquare className="text-primary fs-1 me-3" />
          <FaGooglePlusG className="text-danger fs-1 me-3" />
          <FaTwitter className="text-primary fs-1 me-3" />
          <FaYoutube className="text-danger fs-1 me-3" />
        </div>
        <div className="address text-center py-5 text-light">
          <h6 className="mb-4">Location</h6>
          <p>Speicher strasse 225</p>
          <p>39106, Magdeburg, Germany</p>
        </div>
        <div className="links text-center py-5 text-light">
          <h6 className="mb-4">Important Links</h6>
          <span className="me-3">Rides</span>
          <span className="me-3">Plan Your Visit</span>
          <span className="me-3">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;


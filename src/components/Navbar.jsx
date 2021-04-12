import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-primary d-flex justify-content-around align-items-center">
      <ul className="links d-flex justify-content-around m-0">
        <Link to="/">
          <li className="btn btn-secondary">Home</li>
        </Link>
        <Link to="/addcard">
          <li className="btn btn-secondary">Add card</li>
        </Link>
      </ul>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-primary d-flex justify-content-around align-items-center">
      <h3>Navbar</h3>
      <ul className="links d-flex justify-content-around">
        <Link to="/">
          <li className="text-danger">Home</li>
        </Link>
        <Link to="/addcard">
          <li className="text-danger">Add card</li>
        </Link>
      </ul>
    </div>
  );
}

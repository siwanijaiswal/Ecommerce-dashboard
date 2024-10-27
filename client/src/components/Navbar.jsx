import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">
              {" "}
              <h3> Products</h3>
            </Link>
          </li>
          <li>
            <Link to="/add">
              <h3> Add Products</h3>
            </Link>
          </li>
          <li>
            <Link to="/update">
              {" "}
              <h3> Update Products</h3>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              {" "}
              <h3>Profile </h3>
            </Link>
          </li>
          <li>
            <Link to="/logout">
              {" "}
              <h3> Logout</h3>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              {" "}
              <h3>SignUp</h3>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

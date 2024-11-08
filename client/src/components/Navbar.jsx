import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logOut = () => {
    localStorage.clear();
    navigate("/signup");
  };

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
            {auth ? (
              <Link onClick={logOut} to="/signup">
                {" "}
                <h3> Logout</h3>
              </Link>
            ) : (
              <Link to="/signup">
                {" "}
                <h3>SignUp</h3>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

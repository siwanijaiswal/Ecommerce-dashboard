import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import NavLogo from "../assets/nav-logo.webp";

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
        {auth ? (
          <ul>
            <div className="nav-logo">
              <img src={NavLogo} width="60px" height="60px" />
            </div>
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
              <Link onClick={logOut} to="/signup">
                {" "}
                <h3> Logout ({JSON.parse(auth).message.name})</h3>
              </Link>{" "}
            </li>
          </ul>
        ) : (
          <ul>
            <div className="nav-logo">
              <img src={NavLogo} width="60px" height="60px" />
            </div>
            <li>
              <Link to="/signup">
                {" "}
                <h3>SignUp</h3>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };

  const loginFields = [
    {
      id: "email",
      name: "email",
      type: "email",
      required: "true",
      placeholder: "john12@gmail.com",
      label: "Email",
      value: loginInfo.email,
      change: handleChange,
    },
    {
      id: "password",
      name: "password",
      type: "password",
      required: "true",
      placeholder: "Your Password",
      label: "Password",
      value: loginInfo.password,
      change: handleChange,
    },
  ];

  const handleLoginSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission
    try {
      const result = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await result.json();
      console.log(data);

      const { message, success } = data;
      if (success) {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
        console.log("hi");
      } else {
        alert("Wrong email/password");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <AuthForm
      heading="LOGIN"
      formName="login-form"
      fields={loginFields}
      buttonText="Login"
      submitHandler={handleLoginSubmit}
      linkText="Don't have an account? SignUp"
      linkPath="/signup"
    />
  );
};

export default Login;

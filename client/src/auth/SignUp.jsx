import { useState, useEffect } from "react";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
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
    const copySignUpInfo = { ...signUpInfo };
    copySignUpInfo[name] = value;
    setSignUpInfo(copySignUpInfo);
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission

    try {
      let result = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        body: JSON.stringify(signUpInfo),
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
      } else {
        alert(message);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const signUpFields = [
    {
      id: "name",
      name: "name",
      type: "text",
      required: "true",
      placeholder: "Your FullName",
      label: "Name",
      value: signUpInfo.name,
      change: handleChange,
    },
    {
      id: "email",
      name: "email",
      type: "email",
      required: "true",
      placeholder: "john12@gmail.com",
      label: "Email",
      value: signUpInfo.email,
      change: handleChange,
    },
    {
      id: "password",
      name: "password",
      type: "password",
      required: "true",
      placeholder: "Your Password",
      label: "Password",
      value: signUpInfo.password,
      change: handleChange,
    },
  ];

  return (
    <AuthForm
      heading="SIGNUP"
      formName="signup-form"
      fields={signUpFields}
      buttonText="Register"
      submitHandler={handleSignUpSubmit}
      linkText="Already have an account? Login"
      linkPath="/login"
    />
  );
};

export default SignUp;

import { useState } from "react";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySignUpInfo = { ...signUpInfo };
    copySignUpInfo[name] = value;
    setSignUpInfo(copySignUpInfo);
    console.log(signUpInfo);
  };

  const handleSignUpSubmit = async (e) => {};

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
      linkPath=""
    />
  );
};

export default SignUp;

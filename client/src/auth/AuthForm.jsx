import { Link } from "react-router-dom";
import "../styles/AuthForm.css";
const AuthForm = ({
  formName,
  fields,
  heading,
  submitHandler,
  linkPath,
  linkText,
  buttonText,
}) => {
  return (
    <div className="wrapper">
      <div className={formName}>
        <div className="heading">
          <h2>{heading}</h2>
        </div>
        <div className="form">
          <form onSubmit={submitHandler}>
            {fields.map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id}>{field.label}</label>
                <input
                  onChange={field.change}
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={field.value}
                />
              </div>
            ))}

            <div className="account">
              <Link to={linkPath}>{linkText}</Link>
              <button type="submit" className="submit-btn">
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

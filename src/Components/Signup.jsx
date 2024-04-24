import React, { useState,useRef } from "react";
import "../Styles/signup.css";
import axios from 'axios';
import FormInput from "./FormInput";
import { Link } from "react-router-dom";
import Login from "./Login"
import FacebookIcon from "@mui/icons-material/Facebook";
import { useAuth0 } from "@auth0/auth0-react";
import bcrypt from "bcryptjs";
const Signup = () => {
  const {user , loginWithRedirect,isAuthenticated} = useAuth0();
  console.log(user)
  const passwordInputRef= useRef();
  const [redirectToLogin,setredirectToLogin]=useState(false);
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email address",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      required: true,
    },
  ];

  const changeHandler = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(inputValue));
    const password = passwordInputRef.current ? passwordInputRef.current.value : '';
    const hashedPassword = bcrypt.hashSync(password, 10);
    const updatedInputValue = { ...inputValue, password: hashedPassword };
    console.log(updatedInputValue);
  };

  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexUsername = /^[A-Za-z0-9]{3,16}$/;
    const regexPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^()_+])[A-Za-z0-9!@#$%^&^*()_+]{8,20}/;

    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    } else if (!regexUsername.test(values.username)) {
      errors.username = "Username should be 3-16 characters and shouldn't include any special character";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!regexPassword.test(values.password)) {
      errors.password = "Password should be 8-20 characters and include at least 1 lowercase letter, 1 uppercase letter, 1 digit, and 1 special character";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length === 0) {
      axios.post('http://localhost:3000/user', inputValue)
        .then(()=>{
          setredirectToLogin(true)
        })
        .catch(err => console.log(err));
    }
    return errors;
  };

  return (
    <div id="form-container" onSubmit={submitHandler}>
      
      {redirectToLogin ? <Login /> : (
        <form>
          <h2>Sign-up</h2>
          {inputs.map((item) => (
            <FormInput
              key={item.id}
              name={item.name}
              type={item.type}
              placeholder={item.placeholder}
              value={inputValue[item.name]}
              onChange={changeHandler}
              errorMessage={formErrors[item.name]}
              ref={item.name === "password" ? passwordInputRef : null} 
            />
          ))}
          <button id="btn" type="submit">
            Submit
          </button>
          <div className="formLink">
            <span>Already have an account?</span>
            <Link to="/login" id="signbtn" style={{ textDecoration: "none" }}>
              SignIn
            </Link>
          </div>
          <div className="line"></div>
          <div className="media-options">
            <Link to="#" className="facebook">
              <FacebookIcon className="facebookIcon" />
              <span>Login with Facebook</span>
            </Link>
          </div>
          <div className="media-options">
            <Link to="#" className=" facebook google" onClick={(e)=>loginWithRedirect()}>
              <img
                className="googleimg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                alt="Google Logo"
              />
              <span>Login with Google</span>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default Signup;

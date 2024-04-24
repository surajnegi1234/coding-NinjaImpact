import React, { useState } from 'react';
import FormInput from './FormInput'
import "../Styles/signup.css";
import { useAuth0 } from "@auth0/auth0-react";
import {toast} from "react-toastify";
import axios from 'axios';
import bcrypt from "bcryptjs";
import{Link} from "react-router-dom"
const Login = () => {
  const {user , loginWithRedirect,logout} = useAuth0();
  const [loggedIn, setLoggedIn] = useState(false); 
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const inputs =[{
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    required:true,
  },
  {
    id:2,
    name:"email",
    type:"email",
    placeholder:"Email",
    required:true
  },{
    id:3,
    name:"password",
    type:"password",
    placeholder:"Password",
    required:true
  }
]
const handleChange = (e) => {
  setLoginData({ ...loginData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  validate(loginData);
  axios.get('http://localhost:3000/user')
    .then((response) => {
      const user = response.data.find(user => user.username === loginData.username);
      if (user) {
        if(user.username===loginData.username)
        if(user.password===loginData.password) { // Compare hashed passwords
          toast.success("Login Successfully");
          setLoggedIn(true);
        } else {
          setError('Invalid username or password');
          alert("failed");
        }
      } else {
        setError('User not found');
        alert("User not found");
      }
    });
};

const validate=(data)=>{
  let results=true;
  if (data.username===""||data.username===null){
    results=false;
    toast.warning("Please Enter Username")
  }
  if (data.password===""||data.password===null){
    results=false;
    toast.warning("Please Enter Password")
  }
  if (data.email===""||data.email===null){
    results=false;
    toast.warning("Please Enter Email")
  }
}
return (
  <div id='form-container'>
    {loggedIn ? (
       <div style={{
        display:"flex",
        flexDirection:"column",


       }}>
       <p>You are logged in </p>
       {/* <button
        // onClick ={(e)=>logout() }
        style={{
  padding: "11px 23px",
  height: "48px",
  border: "1px solid #141414",
  color: "#141414",
  boxSizing: "border-box",
  position: "relative",
  verticalAlign: "baseline",
  textAlign: "center",
  textDecoration: "none",
  borderRadius: "8px",
  backgroundColor: "unset",
  cursor: "pointer",
  outline: "none",
  background:"#ffffff",
  fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif"

}}>Logout</button> */}
     </div>
       // Render message if already logged in
    ) : (
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {inputs.map(item => (
          <FormInput key={item.id} value={loginData[item.name]} name={item.name} type={item.type} placeholder={item.placeholder} onChange={handleChange} />
        ))}
        {error && <p className="errorMessage">{error}</p>}
        <button id="btn" type="submit">Login</button>
        <div className="formLink">
           <div className="login-span">
           <span>New User?</span>
            <Link to="/Signin" id="signbtn" style={{ textDecoration: "none" ,
          
          }}>
              Sign-up
            </Link>
           </div>
            
          </div>
      </form>
    )}
  </div>
)
}


export default Login



// if(user){
//   const isPasswordmatch = bcrypt.compareSync(loginData.password , user.password);
//   if(isPasswordmatch){
    
//   }
// }


// if(user){
//   if(login.password=== user.password){

//   }
//   const isMatchedPassword  = bcrypt.compareSync(login.password ,user.password);
//   if(isMatchedPassword){
     
//   }
// }

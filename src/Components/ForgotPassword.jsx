import React from 'react'
import { useState } from 'react';
import FormInput from './FormInput';
import {toast} from "react-toastify";
const ForgotPassword = () => {
    const [loginData, setLoginData] = useState({
      email: ''
    });
    const [error, setError] = useState('');
    const inputs =[
    {
      id:1,
      name:"email",
      type:"email",
      placeholder:"Email",
      required:true
    }
  ]
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        validate(loginData)
      
      
      };
    const validate=(data)=>{
        let results=true;
        if (data.email===""||data.email===null){
          results=false;
          toast.warning("Please Enter email")
        }
        
      }
  return (
    <div id='form-container'>
      <form onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        {inputs.map(item => (
          <FormInput key={item.id} value={loginData[item.name]} name={item.name} type={item.type} placeholder={item.placeholder} onChange={handleChange} />
        ))}
        {error && <p className="errorMessage">{error}</p>}
        <button id="btn" type="submit">Reset</button>
      </form>
  </div>
  )
}

export default ForgotPassword

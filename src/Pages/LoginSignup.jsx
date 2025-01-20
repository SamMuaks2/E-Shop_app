import React, { useState } from "react";
import "./CSS/LoginSignup.css";

function LoginSignup() {

  const [state, setState] = useState("Login");

  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const API_BASE_URL = "https://e-shop-backend-eta.vercel.app/";

  const login = async () => {
    console.log("Login executed", formData);
    
    let responseData;

    await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }

    else {
      alert(responseData.errors)
    }
  }
  
  const signup = async () => {
    console.log("Sign up executed", formData);

    let responseData;

    await fetch(`${API_BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }

    else {
      alert(responseData.errors)
    };
  }

  return (
    <div className="loginsignup">

      <div className="loginsignup-container">
      
        <h1>{state}</h1>
      
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <div className="input-name">
            <input name="firstname" value={formData.firstname} onChange={changeHandler} type="text" placeholder="First Name" />
            <input name="surname" value={formData.surname} onChange={changeHandler} type="text" placeholder="Surname" /> 
          </div> : <></> }

          <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>
      
        <button onClick={() => {state === "Login" ? login() : signup()}}>Continue</button>

        {state === "Sign Up" ? 
        
        <p className="loginsignup-login">
          Already have an account? <span onClick={() => {setState("Login")}}>Login here</span>
        </p>

        :

        <p className="loginsignup-login">
          Create an account? <span onClick={() => {setState("Sign Up")}}>Click here</span>
        </p>
        }

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
      
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;

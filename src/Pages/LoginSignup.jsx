import React from "react";
import "./CSS/LoginSignup.css";

function LoginSignup() {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your First Name" />
          <input type="text" placeholder="Your Surname Name" />
          <input type="text" placeholder="Your Other Name(s)" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>

        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
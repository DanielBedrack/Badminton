import React, { useState } from 'react'
import './login.css'
import { NavLink } from 'react-router-dom';

const Login = () => {

  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "userName") {
      setUserName(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="login-form">
      <div className="form">
        <div className="form-body">
          <div className="username">
            <label className="form__label" for="firstName">
              First Name{" "}
            </label>
            <input
              className="form__input"
              type="text"
              value={userName}
              onChange={(e) => handleInputChange(e)}
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
              placeholder="Password"
            />
          </div>
          <div className="to-register">
            <p>
              Dont have an account?{" "}
              <NavLink className="regi" to="/registration">
                Click here
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login

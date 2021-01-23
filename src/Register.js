import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { config } from "./config";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState("true");

  const history = useHistory();

  const registerRequest = () => {
    axios
      .post(`${config.baseApi}/user/register`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        history.push("/user/login");
      })
      .catch((err) => {
        console.log(err);
        setIsValid(false);
      });
  };

  return (
    <div className="auth-form">
      <h1>Register</h1>
      <span id="error-message">
        {!isValid ? "Something went wrong, please try again" : ""}
      </span>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          registerRequest();
        }}
      >
        <div className="user-box">
          <h3>Email</h3>
          <input
            id="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="user-box">
          <h3>Password</h3>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button className="login-btn">Register</button>
      </form>
    </div>
  );
};

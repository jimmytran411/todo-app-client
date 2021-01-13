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
    <div>
      <h1>Register</h1>
      <span>{!isValid ? "Something went wrong, please try again" : ""}</span>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          registerRequest();
        }}
      >
        <div className="user-box">
          <label htmlFor="email">
            Email
            <input
              id="email"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="user-box">
          <label htmlFor="password">
            Password
            <input
              id="password"
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
        </div>

        <button className="login-btn">Register</button>
      </form>
    </div>
  );
};

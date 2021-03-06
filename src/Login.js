import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { config } from "./config";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUser, setIsUser] = useState("true");

  const history = useHistory();

  const loginRequest = () => {
    axios
      .post(`${config.baseApi}/user/login`, {
        email,
        password,
      })
      .then((res) => {
        let token = res.data.token;
        localStorage.setItem("token", token);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setIsUser(false);
      });
  };

  return (
    <div className="auth-form">
      <h1>Login</h1>
      <span id="error-message">
        {!isUser ? "Something went wrong, please try again" : ""}
      </span>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          loginRequest();
        }}
      >
        <div className="user-box">
          <h3>Email </h3>
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

        <button className="login-btn">Submit</button>
      </form>
    </div>
  );
};

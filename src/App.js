import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import { Todos } from "./Todos";
import { Login } from "./Login";
import { CreateTodo } from "./CreateTodo";
import { EditTodo } from "./EditTodo";
import { PrivateRoute, PublicRoute } from "./Auth";
import { logOut, isLogin, getToken } from "./utils/auth";
import { Register } from "./Register";
import { config } from "./config";
import axios from "axios";

function App() {
  const initialLoginState = isLogin();
  const [isUser, setIsUser] = useState(initialLoginState);
  const handleLogOut = () => {
    logOut();
    setIsUser(!isUser);
  };
  const handleDeleteUser = () => {
    let userId;
    axios
      .get(`${config.baseApi}/user/me`, {
        headers: {
          "x-auth": getToken(),
        },
      })
      .then((res) => {
        userId = res.data._id;
        axios
          .delete(`${config.baseApi}/user/${userId}`, {
            headers: {
              "x-auth": getToken(),
            },
          })
          .then((res) => console.log(res))
          .catch(console.error);
        handleLogOut();
      })
      .catch(console.error);
  };
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            {isUser ? (
              <ul>
                <li>
                  <button onClick={handleDeleteUser}>Delete User</button>
                </li>
                <li>
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/user/login">Login</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/user/register">Register</Link>
                </li>{" "}
              </ul>
            )}
          </ul>
        </header>
        <Switch>
          <PrivateRoute exact path="/" component={Todos} />
          <PublicRoute exact path="/user/login" component={Login} />
          <PublicRoute exact path="/user/register" component={Register} />
          <PrivateRoute
            exact
            path="/todo/new"
            component={CreateTodo}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/todo/:id"
            component={EditTodo}
          ></PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

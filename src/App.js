import {
  BrowserRouter as Router,
  Link,
  Switch,
  useHistory,
} from "react-router-dom";
import React from "react";
import "./App.css";
import { Todos } from "./Todos";
import { Login } from "./Login";
import { CreateTodo } from "./CreateTodo";
import { EditTodo } from "./EditTodo";
import { PrivateRoute, PublicRoute } from "./Auth";
import { logOut } from "./utils/auth";

function App() {
  let history = useHistory();
  const onLogOutClick = () => {
    logOut();
    history.push("/user/login");
  };
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user/login">Login</Link>
            </li>
            <li>
              <button onClick={onLogOutClick}>Log Out</button>
            </li>
          </ul>
        </header>
        <Switch>
          <PrivateRoute exact path="/" component={Todos} />
          <PublicRoute
            exact
            path="/user/login"
            restricted={false}
            component={Login}
          />
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

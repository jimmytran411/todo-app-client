import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import { Todos } from "./Todos";
import { Login } from "./Login";
import { TodoForm } from "./TodoForm";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users/login">Login</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route exact path="/" component={Todos} />
          <Route exact path="/users/login" component={Login}></Route>
          <Route exact path="/todo/new" component={TodoForm}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

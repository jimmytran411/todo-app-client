import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./Landing";
import { Login } from "./Login";

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
          <Route exact path="/" component={Landing} />
          <Route exact path="/users/login" component={Login}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

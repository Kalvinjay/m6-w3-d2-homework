import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/netflix">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" alt="Netflix" />
              </Link>
            </li>
            <li>
              <Link to="/hbo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" alt="HBO Max" />
              </Link>
            </li>
            <li>
              <Link to="/hulu">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" alt="Hulu" />
              </Link>
            </li>
            <li>
              <Link to="/primevideo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" alt="Prime Video" />
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/netflix">
            <Child name="Netflix" />
          </Route>
          <Route path="/hbo">
            <Child name="HBO Max" />
          </Route>
          <Route path="/hulu">
            <Child name="Hulu" />
          </Route>
          <Route path="/primevideo">
            <Child name="Prime Video" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Child({ name }) {

  return (
    <div>
      <h3>You Selected: {name}</h3>
    </div>
  );
}

import React from "react";
import "./App.css";
import Chart from "./components/Chart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Evelyn from "./Students/Evelyn";
import Aranka from "./Students/Aranka";
import Floris from "./Students/Floris";
import Hector from "./Students/Hector";
import Martina from "./Students/Martina";
import Maurits from "./Students/Maurits";
import Rahima from "./Students/Rahima";
import Sandra from "./Students/Sandra";
import Storm from "./Students/Storm";
import Wietske from "./Students/Wietske";
import Students from "./Students/Students";

function App() {
  return (
    <div className="App">
      <Router>
        <ul id="header">
          <img
            className="wincLogo"
            src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff43bccab-088a-4a90-8985-f54e721c5ee8%2Fwinc-round.png?table=block&id=8b7db030-1140-4b1c-84ed-19791ae057b3&width=250&cache=v2"
            alt="winc logo"
          ></img>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <a href="#students">Students</a>
          </li>
        </ul>

        <Switch>
          <Route path="/Wietske">
            <Wietske />
          </Route>
          <Route path="/Storm">
            <Storm />
          </Route>
          <Route path="/Sandra">
            <Sandra />
          </Route>
          <Route path="/Rahima">
            <Rahima />
          </Route>
          <Route path="/Maurits">
            <Maurits />
          </Route>
          <Route path="/Martina">
            <Martina />
          </Route>
          <Route path="/Hector">
            <Hector />
          </Route>
          <Route path="/Floris">
            <Floris />
          </Route>
          <Route path="/Aranka">
            <Aranka />
          </Route>
          <Route path="/Evelyn">
            <Evelyn />
          </Route>
          <Route path="/">
            <Chart id="Chart" />
          </Route>
        </Switch>
        <h1>
          <a id="students"></a>Students
        </h1>
        <Students />
      </Router>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import logo from "./logo.svg";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Login from "./components/login.js";
import Dashboard from "./components/dashboard.js";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            {/* <Login /> */}
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;

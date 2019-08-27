import React, { useState } from "react";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Login from "./components/login.js";
import Dashboard from "./components/dashboard.js";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;

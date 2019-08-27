import React, { useState } from "react";
import logo from "../logo.svg";

export default function Login(props) {
  const [userName, setUser] = useState("");
  const [userPassword, setPassword] = useState("");
  const submit = e => {
    e.preventDefault();

    if (userName && userPassword) {
      props.history.push("/dashboard");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>E-Dashboard</p>
        <form onSubmit={submit}>
          <div>
            <label htmlFor="username"> Username </label>
            <input
              className="input"
              name="username"
              type="text"
              placeholder="Username"
              onChange={e => setUser(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password"> Password </label>
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Login" />
        </form>
      </header>
    </div>
  );
}

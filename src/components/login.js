import React, { useState } from "react";

export default function Login(props) {
  const [userName, setUser] = useState("");
  const [userPassword, setPassword] = useState("");
  const submit = e => {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    console.log(userName);
    console.log(userPassword);
    console.log(props);
    if (userName && userPassword) {
      props.history.push("/dashboard");
    }
  };
  return (
    <div>
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
    </div>
  );
}

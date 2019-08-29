import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <NavLink to="/dashboard"></NavLink>
      <NavLink>
        {" "}
        <span></span> Dashboard
      </NavLink>
      <NavLink>
        {" "}
        <span></span> In stock
      </NavLink>
      <NavLink>
        {" "}
        <span></span> Order
      </NavLink>
      <NavLink>
        {" "}
        <span></span> Order Tracking
      </NavLink>
      <NavLink>
        {" "}
        <span></span> Catalog Management
      </NavLink>
      <NavLink>
        {" "}
        <span></span> Reports
      </NavLink>

      <div className="navAside">
        <NavLink>
          <span>search</span>
        </NavLink>
        <NavLink>
          <span>Notification</span>
        </NavLink>
        <NavLink>
          <span>profile pic</span>
        </NavLink>
        <NavLink>
          <select name="profile" id="">
            <option value="Profile">Profile</option>
            <option value="Settings">Settings</option>
            <option value="Logout">Logout</option>
          </select>
        </NavLink>
      </div>
    </div>
  );
}

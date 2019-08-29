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
    </div>
  );
}

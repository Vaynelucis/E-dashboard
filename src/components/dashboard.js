import React from "react";
import DashBody from "./dashBody";
import Nav from "./Nav";

export default function dashboard() {
  return (
    <div className="dashboard">
      <Nav />
      <div className="container">
        <aside className="flex-item menu">
          <h2>Overview</h2>
          <h3>Orders Today</h3>
          <strong>254</strong>
          <h3>Pending Orders</h3>
          <strong>09</strong>
          <h3>Delivered Orders </h3>
          <strong>125</strong>
          <h3>Cancelled orders</h3>
          <strong>20</strong>
        </aside>
        <aside className="grid-item dash">
          {/* <p>a1</p> */}
          <DashBody />
        </aside>
      </div>
    </div>
  );
}

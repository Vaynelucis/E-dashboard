import React from "react";

export default function subNav() {
  return (
    <div className="subNav">
      <h2>In Stock</h2>
      <form>
        <input type="text" placeholder="Quick Search" className="subNavInput" />

        <label htmlFor="status">Status</label>
        <select name="status" id="" className="subNavInput">
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
        <input type="datetime" name="date" id="" className="subNavInput" />
      </form>
      <button>
        <span>New Order</span>
        <span>+</span>
      </button>
    </div>
  );
}

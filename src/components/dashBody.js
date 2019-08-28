import React, { useState, Component } from "react";

export default function DashBody() {
  const [products, setProducts] = useState({
    code: "hpggg",
    name: "Action Figure",
    Instruction: "stock Adjustment",
    status: "completed",
    date: "20-08-2019",
    quantity: 100
  });
  return (
    <div className="dashbody">
      <div className="grid-container-heading">
        <h3 className="grid-item-heading">Product Code</h3>
        <h3 className="grid-item-heading">Product</h3>
        <h3 className="grid-item-heading">Special Insrtuctions</h3>
        <h3 className="grid-item-heading">Status</h3>
        <h3 className="grid-item-heading">Date</h3>
        <h3 className="grid-item-heading">Quantity</h3>
      </div>

      {products ? (
        <div className="grid-container-dash">
          <h3 className="grid-item-heading"> {products.code} </h3>
          <h3 className="grid-item-heading">{products.name}</h3>
          <h3 className="grid-item-heading">{products.Instruction}</h3>
          <h3 className="grid-item-heading">{products.status}</h3>
          <h3 className="grid-item-heading">{products.date}</h3>
          <h3 className="grid-item-heading">{products.quantity}</h3>
        </div>
      ) : (
        <p>Empty Blood</p>
      )}
    </div>
  );
}

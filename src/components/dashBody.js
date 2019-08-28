import React, { useState, Component } from "react";
import SubNav from "./SubNav";

export default function DashBody() {
  const [products, setProducts] = useState([
    {
      code: "hpggg",
      name: "Action Figure",
      Instruction: "stock Adjustment",
      status: "completed",
      date: "20-08-2019",
      quantity: 100
    },
    {
      code: "ndanfk",
      name: "bang Action Figure",
      Instruction: "stock Adjustment",
      status: "Incomplete",
      date: "20-08-2019",
      quantity: 500
    }
  ]);

  const loadedProducts = products.map(product => {
    return (
      <div className="grid-container-dash">
        <h3 className="grid-item-heading"> {product.code} </h3>
        <h3 className="grid-item-heading">{product.name}</h3>
        <h3 className="grid-item-heading">{product.Instruction}</h3>
        <h3 className="grid-item-heading">{product.status}</h3>
        <h3 className="grid-item-heading">{product.date}</h3>
        <h3 className="grid-item-heading">{product.quantity}</h3>
      </div>
    );
  });

  return (
    <div className="dashbody">
      <SubNav />
      <div className="grid-container-heading">
        <h3 className="grid-item-heading">Product Code</h3>
        <h3 className="grid-item-heading">Product</h3>
        <h3 className="grid-item-heading">Special Insrtuctions</h3>
        <h3 className="grid-item-heading">Status</h3>
        <h3 className="grid-item-heading">Date</h3>
        <h3 className="grid-item-heading">Quantity</h3>
      </div>

      {products ? loadedProducts : <p>Empty Blood</p>}
    </div>
  );
}

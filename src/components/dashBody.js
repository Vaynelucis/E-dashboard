import React, { useState } from "react";

export default function dashBody() {
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
    </div>
  );
}

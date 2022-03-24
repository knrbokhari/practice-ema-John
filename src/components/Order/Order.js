import React from "react";
import "./Order.css";
const Order = (props) => {
  console.log(props);
  return (
    <div className="order-cart">
      <p>Selected Items: {props.cart.length}</p>
      <p>Total Price: $</p>
      <p>Total Shipping Charge: $</p>
      <p>Tax: $</p>
      <h2>Grand Total: $</h2>
    </div>
  );
};

export default Order;

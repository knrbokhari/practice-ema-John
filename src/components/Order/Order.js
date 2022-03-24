import React from "react";
import "./Order.css";
const Order = (props) => {
  const { cart } = props;
  let price = 0;
  let totalShipping = 0;
  let tax = 0;
  let grandTotal = 0;

  for (const product of cart) {
    price = price + product.price;
    totalShipping = totalShipping + product.shipping;
    tax = ((price + totalShipping) * 0.1).toFixed(2);
    grandTotal = price + totalShipping + parseFloat(tax);
  }

  return (
    <div className="order">
      <h1>Order Summary</h1>
      <div className="order-cart">
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${price}</p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${tax}</p>
        <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Order;

import React from "react";
import "./Order.css";
const Order = (props) => {
  const { cart } = props;
  let items = 0;
  let price = 0;
  let totalShipping = 0;
  let tax = 0;
  let grandTotal = 0;

  for (const product of cart) {
    items = items + product.quantity;

    // if (product.quantity === 0) {
    //   product.quantity = product.quantity + 1;
    // }

    // if (product.quantity === 1) {
    //   totalShipping += product.shipping;
    //   console.log(product);
    // }
    price = price + product.price * product.quantity;
    totalShipping += product.shipping;
    tax = (price * 0.1).toFixed(2);
    grandTotal = price + totalShipping + parseFloat(tax);
  }

  return (
    <div className="order">
      <h1>Order Summary</h1>
      <div className="order-cart">
        <p>Selected Items: {items}</p>
        <p>Total Price: ${price}</p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${tax}</p>
        <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Order;

import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Product = ({ addToCart, product }) => {
  // props destructuring
  // const { addToCart, product } = props;
  const { img, name, price, seller, ratings, id } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-details">
        <h2>{name}</h2>
        <h3>Price: ${price}</h3>
        <p>Manufacturer : {seller}</p>
        <p>Ratting : {ratings} start</p>
      </div>
      <button onClick={() => addToCart(product)} className="cart-btn">
        <p>Add to Cart </p>
        <FontAwesomeIcon icon={faCartArrowDown} />
      </button>
    </div>
  );
};

export default Product;

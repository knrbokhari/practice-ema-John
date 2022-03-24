import React, { useEffect, useState } from "react";
import Order from "../Order/Order";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  // api
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // cart funtion
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            addToCart={addToCart}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h1>Order Summary</h1>
        <Order cart={cart}></Order>
      </div>
    </div>
  );
};

export default Shop;

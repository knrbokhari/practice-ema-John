import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
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

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  // cart funtion
  const addToCart = (selectProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectProduct.id);
    if (!exists) {
      selectProduct.quantity = 1;
      newCart = [...cart, selectProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectProduct.id);
      exists.quantity += 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectProduct.id);
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
        <Order cart={cart}></Order>
      </div>
    </div>
  );
};

export default Shop;

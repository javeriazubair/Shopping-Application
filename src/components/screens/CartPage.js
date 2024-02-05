// src/screens/CartPage.js
import React from "react";
import useCart from "../hooks/useCart";

const CartPage = () => {
  const { cart, handleRemoveFromCart, clearCart, calculateTotalPrice, handleCheckout } = useCart();

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="container mt-5">
      <h2>Cart Items</h2>
      <ul className="list-group">
        {cart.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.name} - ${item.price}
            <button
              className="btn btn-danger btn-sm ms-2"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-3">
        <p>Total Price: ${calculateTotalPrice()}</p>
        <button className="btn btn-warning me-2" onClick={() => clearCart()}>
          Clear Cart
        </button>
        <button className="btn btn-success" onClick={() => handleCheckout()}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;

// src/components/CartCount.js
import React from "react";
import useCartStore from "../../states/cartState";
import { Link } from "react-router-dom";

const CartCount = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="position-fixed top-0 end-0 m-3">
      <Link to="/cart" className="text-decoration-none">
        <span className="bg-primary text-white rounded-pill px-3 py-2">
          Cart: {cart.length}
        </span>
      </Link>
    </div>
  );
};

export default CartCount;

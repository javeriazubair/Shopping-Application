// src/components/ItemCard.js
import React from "react";
import useCart from "../hooks/useCart";
import useCartStore from "../../states/cartState";


const ItemCard = ({ id, name, price, img }) => {
  const { handleAddToCart } = useCart()
 
  const addtocart = () => {
    handleAddToCart({ id, name, price, img });
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price: ${price}</p>
        <button className="btn btn-primary" onClick={addtocart}>
          Add to Cart
        </button>
      </div>
     
    </div>
    
  );
};

export default ItemCard;

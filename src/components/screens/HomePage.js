// src/HomePage.js
import React from "react";
import Card from "../cards/card";
import CartCount from "../cards/cartCoundCard";


const HomePage = () => {
  return (
      <div>
        {/* Navigation Links */}

        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Welcome to the Homepage</h1>
          
          <div className="row">
          <div className="col-md-12">
          {/* Include CartCount component */}
          <CartCount />
        </div>
      </div>
          <Card
            title="Browse Our Items"
            description="Explore our collection of items."
            linkTo="/items"
            buttonLabel="View Items"
          />

          <Card
            title="Your Cart"
            description="View and manage items in your cart."
            linkTo="/cart"
            buttonLabel="Go to Cart"
          />

          <Card
            title="Add New Item"
            description="Contribute to our collection by adding a new item."
            linkTo="/add-item"
            buttonLabel="Add Item"
          />
        </div>
      </div>
    </div>


      
          
      </div>
  
  );
};

export default HomePage;

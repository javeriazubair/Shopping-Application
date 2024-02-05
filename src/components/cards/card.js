// src/components/Card.js
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, linkTo, buttonLabel }) => {
  
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link to={linkTo} 
        className="btn btn-primary">{buttonLabel}</Link>
      </div>
    </div>
  );
};

export default Card;

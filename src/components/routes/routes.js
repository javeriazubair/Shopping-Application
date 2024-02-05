// src/routes.js
import React from "react";
import { Route, Routes,Router } from "react-router-dom";
import HomePage from "../screens/HomePage";
import ItemListPage from "../screens/ItemsPage";
import CartPage from "../screens/CartPage";
import AddItemPage from "../screens/AddItemPage";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/"   element={<HomePage />} />
      <Route path="/items"   element={<ItemListPage />} />
      <Route path="/cart"   element={<CartPage />} />
      <Route path="/add-item"   element={<AddItemPage />}/>
      </Routes>
  );
};

export default Navigation;

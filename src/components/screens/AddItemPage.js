import React, { useState } from 'react';
import useItemList from '../hooks/useListItem';
import CartCount from "../cards/cartCoundCard";
const AddItemPage = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemImage, setItemImage] = useState('');

  const { fetchAndAddItem } = useItemList();

  const handleAddItem = (e) => {
    e.preventDefault();

    // Validate input fields (you can add more validation if needed)
    if (!itemName || !itemPrice || !itemImage) {
      alert('Please fill in all fields');
      return;
    }

    // Create a new item object
    const newItem = {
      name: itemName,
      price: itemPrice,
      img: itemImage,
    };

    // Fetch and add the new item to the list
    fetchAndAddItem(newItem);

    // Clear input fields
    setItemName('');
    setItemPrice('');
    setItemImage('');
  };

  return (
    <div className="container mt-5">
         <div className="row">
        <div className="col-md-12">
          {/* Include CartCount component */}
          <CartCount />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Add New Item</h1>
          <form onSubmit={handleAddItem}>
            <div className="mb-3">
              <label htmlFor="itemName" className="form-label">
                Item Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="itemName"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="itemPrice" className="form-label">
                Item Price:
              </label>
              <input
                type="text"
                className="form-control"
                id="itemPrice"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="itemImage" className="form-label">
                Item Image URL:
              </label>
              <input
                type="text"
                className="form-control"
                id="itemImage"
                value={itemImage}
                onChange={(e) => setItemImage(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItemPage;

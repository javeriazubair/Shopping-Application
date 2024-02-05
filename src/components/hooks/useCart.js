// useCart.js
import useCartStore from '../../states/cartState';
import { useEffect } from 'react';

const useCart = () => {
  
  const cart = useCartStore((state) => state.cart)
  const setCart = useCartStore((state) => state.setCart)
  // Load cart from local storage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, [setCart]);

  // Persist cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Function to add an item to the cart
  const handleAddToCart = (item) => {
    const items = [...cart, item]
    setCart(items);
  };

  // Function to remove an item from the cart
  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  const clearCart = () => {
    setCart([]);
  };

  // Function to handle the checkout process
  const handleCheckout = () => {
    localStorage.removeItem('cart');
    setCart([]);
  };

  return { cart, handleAddToCart, handleRemoveFromCart, calculateTotalPrice, handleCheckout, clearCart};
};

export default useCart;

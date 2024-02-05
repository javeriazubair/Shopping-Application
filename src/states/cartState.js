// cartStore.js
import { create } from 'zustand'

const useCartStore = create((set) => ({
  cart: [],
  setCart: (item) => set({ cart: item }),
  
}));

export default useCartStore;
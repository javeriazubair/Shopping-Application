import {create} from 'zustand';

const useItemListStore = create((set) => ({
  list: [],
  setList: (newList) => set({ list: newList }),
}));

export default useItemListStore;
import useItemListStore from "../../states/itemListState";
import {  useEffect } from "react";


const useItemList = () => {
  const { list, setList } = useItemListStore();
  
  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:3000/items');
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      const data = await response.json();
      setList(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };


  useEffect(() => {
    fetchItems()
  }, []);

  const postNewItem = async (newItem) => {
    try {
      const response = await fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error('Failed to add new item');
      }

      // If the item is successfully added, fetch the updated item list
      await fetchItems();
    } catch (error) {
      console.error('Error adding new item:', error);
    }
  };

  const fetchAndAddItem = async (item) => {
    await postNewItem(item);
  };

  return { list, fetchItems, fetchAndAddItem };
};

export default useItemList;

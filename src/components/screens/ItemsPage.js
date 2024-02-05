// src/screens/ItemListPage.js
import React from "react";
import ItemCard from "../cards/itemCard";
import CartCount from "../cards/cartCoundCard";
import useItemList from "../hooks/useListItem";

const ItemListPage = () => {
 // const { items, loading, error } = useItemState();
 const { list } = useItemList()
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          {/* Include CartCount component */}
          <CartCount />
        </div>
      </div>
      <div className="row">
        {list.map((item) => (
          <div className="col-md-4" key={item.id}>
            <ItemCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListPage;

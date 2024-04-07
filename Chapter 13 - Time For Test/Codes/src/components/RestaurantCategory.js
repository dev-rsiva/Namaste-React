import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  const handleClick = () => {
    console.log("clicked");
    setShowItems(showItems === data.title ? "" : data.title);
  };

  console.log(data);
  return (
    <div className="w-6/12 mx-auto bg-blue-50 shadow-lg my-3 py-4 rounded-lg">
      <div
        className="flex justify-between items-center px-6 mb-2 cursor-pointer"
        onClick={handleClick}
      >
        <span className="mr-6 font-semibold text-xl">
          {data.title}({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>

      {showItems === data.title && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;

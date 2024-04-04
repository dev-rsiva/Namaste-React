import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utills/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  console.log("render start");

  const [showItems, setShowItems] = useState("");

  const paramObj = useParams();

  const resInfo = useRestaurantMenu(paramObj.resId);
  console.log("middle");

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  console.log("render after name");

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="my-10 mx-10 text-center">
      <h1 className="text-2xl text-slate-700 font-bold">{name}</h1>
      <p className="text-base text-slate-700">
        {cuisines.join(",")} - {costForTwoMessage}{" "}
      </p>
      {categories.map((eachCategory) => (
        <RestaurantCategory
          data={eachCategory.card.card}
          showItems={showItems}
          setShowItems={setShowItems}
        />
      ))}
      {console.log("render ends")}
    </div>
  );
};

export default RestaurantMenu;

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utills/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  console.log("render start");

  const paramObj = useParams();
  console.log(paramObj.resId);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log(
      MENU_API + paramObj.resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const data = await fetch(
      MENU_API + paramObj.resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json);
    console.log(resInfo);
  };

  console.log("middle");

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  console.log(resInfo?.data?.cards[2]?.card?.card?.info);

  const { title, itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="restarauntMenu-container">
      <h1 className="name-of-restaurant">{name}</h1>
      <p className="menu">
        {cuisines.join(",")} - {costForTwoMessage}{" "}
      </p>
      <h2>Menu</h2>
      <ul className="list-of-menu">
        {itemCards?.map((eachMenu) => {
          const { name, id, price } = eachMenu?.card?.info;
          return (
            <li key={id}>
              {name} - Rs.{price / 100}/-
            </li>
          );
        })}
      </ul>
      {console.log("render ends")}
    </div>
  );
};

export default RestaurantMenu;

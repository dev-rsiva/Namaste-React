import { useState, useEffect } from "react";
import { MENU_API } from "../utills/constant";

const useRestaurantMenu = (restaurantId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + restaurantId);

    const json = await data.json();

    setResInfo(json);
  };

  console.log(resInfo);
  return resInfo;
};

export default useRestaurantMenu;

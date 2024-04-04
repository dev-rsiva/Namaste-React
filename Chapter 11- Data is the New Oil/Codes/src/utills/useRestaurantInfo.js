import { SWIGGY_API } from "../utills/constant";
import { useState, useEffect } from "react";
const useRestaurantInfo = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchFilteredRestaurants, setSearchFilteredRestaurants] = useState(
    []
  );

  useEffect(() => {
    fetchData();
    console.log("useEffect");
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();

    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  };
  console.log(listOfRestaurants);
  return {
    listOfRestaurants,
    setListOfRestaurants,
    searchFilteredRestaurants,
    setSearchFilteredRestaurants,
  };
};

export default useRestaurantInfo;

import { useEffect, useState } from "react";
import { resList } from "../utills/constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchFilteredRestaurants, setSearchFilteredRestaurants] = useState(
    []
  );

  const [searchString, setSearchString] = useState("");

  console.log("render Started");
  console.log(searchString);
  useEffect(() => {
    fetchData();
    console.log("useEffect");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log("fetchData");
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>It's look's like you are offline, Check Your internet connection</h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div id="search-container" className="py-6">
          <input
            type="text"
            id="search-bar"
            className="mx-4 border border-gray-800 border-solid rounded"
            value={searchString}
            onChange={(e) => {
              setSearchString(e.target.value);
            }}
          />
          {console.log("After Onchange")}
          <button
            id="search-btn"
            className="py-1 px-4 bg-emerald-300 text-gray-700 font-medium rounded-md"
            onClick={() => {
              const searchedRestaurants = listOfRestaurants?.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchString.toLowerCase())
              );
              setSearchFilteredRestaurants(searchedRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="py-1 px-4 mx-4 font-normal text-slate-50 bg-emerald-700 rounded-md"
            onClick={() => {
              const filteresList = listOfRestaurants?.filter(
                (restaurant) => restaurant.info.avgRating > 4.3
              );
              setListOfRestaurants(filteresList);
              console.log(filteresList);
            }}
          >
            Top-rated-restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {searchFilteredRestaurants?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard {...restaurant?.info} />
          </Link>
        ))}
      </div>
      {console.log("searchString")}
    </div>
  );
};

export default Body;

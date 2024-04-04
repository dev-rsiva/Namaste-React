import { useEffect, useState } from "react";
import { resList } from "../utills/constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";
import useRestaurantInfo from "../utills/useRestaurantInfo";
import { SWIGGY_API } from "../utills/constant";

const Body = () => {
  const {
    listOfRestaurants,
    searchFilteredRestaurants,
    setSearchFilteredRestaurants,
  } = useRestaurantInfo();

  const [searchString, setSearchString] = useState("");

  console.log("render Started");
  console.log(searchString);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>It's look's like you are offline, Check Your internet connection</h1>
    );
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div id="search-container">
          <input
            type="text"
            id="search-bar"
            value={searchString}
            onChange={(e) => {
              setSearchString(e.target.value);
            }}
          />
          {console.log("After Onchange")}
          <button
            id="search-btn"
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
        <button
          className="filter"
          onClick={() => {
            const filteresList = listOfRestaurants?.filter(
              (restaurant) => restaurant.info.avgRating > 4.3
            );
            setSearchFilteredRestaurants(filteresList);
            console.log(listOfRestaurants);
          }}
        >
          Top-rated-restaurants
        </button>
      </div>
      <div className="res-card-container">
        {searchFilteredRestaurants?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
            style={{ textDecoration: "none", color: "inherit" }}
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

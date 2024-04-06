import { useEffect, useState, useContext } from "react";
import { resList } from "../utills/constant";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";
import useRestaurantInfo from "../utills/useRestaurantInfo";
import UserContext from "../utills/UserContext";

const Body = () => {
  const {
    listOfRestaurants,
    searchFilteredRestaurants,
    setSearchFilteredRestaurants,
  } = useRestaurantInfo();

  console.log(listOfRestaurants);
  console.log(searchFilteredRestaurants);

  const [searchString, setSearchString] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUsername } = useContext(UserContext);

  if (onlineStatus === false) {
    return (
      <h1>It's look's like you are offline, Check Your internet connection</h1>
    );
  }

  return listOfRestaurants?.length === 0 ? (
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
              setSearchFilteredRestaurants(filteresList);
              console.log(filteresList);
            }}
          >
            Top-rated-restaurants
          </button>
        </div>

        <div>
          <label>Username: </label>
          <input
            className="border-2 rounded p-1 border-blue-500 outline-none"
            value={loggedInUser}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {searchFilteredRestaurants?.map((restaurant) => {
          console.log(restaurant);

          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {restaurant.info.avgRating > 4.3 ? (
                <RestaurantCardPromoted {...restaurant?.info} />
              ) : (
                <RestaurantCard {...restaurant?.info} />
              )}
            </Link>
          );
        })}
      </div>
      {console.log("searchString")}
    </div>
  );
};

export default Body;

import { useEffect, useState } from "react";
import { resList } from "../utills/constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import SWIGGY_API from "../utills/constant";
// import useRestaurantInfo from "../utills/useRestaurantInfo";

const Body = () => {
  // const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const { listOfRestaurants } = useRestaurantInfo();

  const [searchFilteredRestaurants, setSearchFilteredRestaurants] =
    useState(listOfRestaurants);

  const [searchString, setSearchString] = useState("");
  console.log("render Started");
  console.log(searchString);
  // useEffect(() => {
  //   fetchData();
  //   console.log("useEffect");
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();

  //   console.log(json);
  //   setListOfRestaurants(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setSearchFilteredRestaurants(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   console.log("fetchData");
  // };

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

            console.log(filteresList);
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
            <RestaurantCard key={restaurant.info.id} {...restaurant?.info} />
          </Link>
        ))}
      </div>
      {console.log("searchString")}
    </div>
  );
};

export default Body;

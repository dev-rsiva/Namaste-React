import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utills/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  console.log("render start");

  const paramObj = useParams();

  const resInfo = useRestaurantMenu(paramObj.resId);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     MENU_API + paramObj.resId + "&catalog_qa=undefined&submitAction=ENTER"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json);
  //   console.log(resInfo?.data?.cards[0]?.card?.card?.info?.name);
  // };

  console.log("middle");

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  console.log("render after name");

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
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

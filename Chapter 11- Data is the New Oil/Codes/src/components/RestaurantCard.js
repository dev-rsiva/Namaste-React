import { useContext } from "react";
import { ImageUrl } from "../utills/constant";
import UserContext from "../utills/UserContext";
const RestaurantCard = ({
  name,
  id,
  cuisines,
  avgRating,
  cloudinaryImageId,
  costForTwo,
  sla,
}) => {
  // const { name, id, cuisines, avgRating, cloudinaryImageId } = resData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="w-56 h-[450px] object-cover m-4 border rounded-md bg-gray-100 shadow-lg hover:bg-slate-200">
      <div className="w-54 h-56 rounded-t-md overflow-hidden">
        <img
          id="cardImage"
          className="w-full h-full object-cover -z-10"
          src={ImageUrl + cloudinaryImageId}
          alt="logoImage"
        />
      </div>
      <div className="mx-2">
        <h2 className="py-2 font-bold">{name}</h2>
        <p className="break-words">{cuisines.join(",")}</p>
        <p>{avgRating} stars</p>
        <p>{costForTwo}</p>
        <p>{sla?.deliveryTime} minutes</p>
        <p>User: {loggedInUser}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 bg-black text-white p-2 rounded">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

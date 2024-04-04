import { ImageUrl } from "../utills/constant";

const RestaurantCard = ({
  name,
  id,
  cuisines,
  avgRating,
  cloudinaryImageId,
}) => {
  // const { name, id, cuisines, avgRating, cloudinaryImageId } = resData?.info;

  return (
    <div className="w-56 h-[450px] object-cover m-4 border rounded-md bg-gray-50 border-slate-600 hover:bg-slate-200">
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
      </div>
    </div>
  );
};

export default RestaurantCard;

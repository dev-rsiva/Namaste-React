import { ImageUrl } from "../utills/constant";

const RestaurantCard = ({
  name,
  id,
  cuisines,
  avgRating,
  costForTwo,
  sla,
  cloudinaryImageId,
}) => {
  // const { name, id, cuisines, avgRating, cloudinaryImageId } = resData?.info;

  return (
    <div className="card">
      <div className="image-container">
        <img
          id="cardImage"
          src={ImageUrl + cloudinaryImageId}
          alt="logoImage"
        />
      </div>
      <h2>{name}</h2>
      <p>{cuisines.join(",")}</p>
      <p>{avgRating} stars</p>
      <p>{costForTwo}</p>
      <p>{sla.slaString}</p>
    </div>
  );
};

export default RestaurantCard;

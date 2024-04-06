import RestaurantCard from "./RestaurantCard";
const sample = () => {
  return (
    <div>
      <label className="absolute m-2 bg-black text-white p-2 rounded">
        Promoted
      </label>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;

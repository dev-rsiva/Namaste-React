import { ImageUrl } from "../utills/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utills/cartSlice";
const ItemList = ({ items }) => {
  console.log(addItem);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Whenever the action "addItem" is called with the any parameter in the dispatch, it will return a object like
    // {type: "addItem", payload: "pizza"}
    // Followed by then it will use this object as a second argument to the reducer function "addItem(state, action)" & executes it.
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div className="flex justify-between items-center mx-10 my-2 py-2 border-b-2">
            <div className="">
              <p className="font-semibold text-base text-gray-700 flex justify-start">
                {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100}
              </p>
              <p className="flex justify-start text-left text-sm text-gray-700">
                {item?.card?.info?.description}
              </p>
            </div>

            <div className="w-[100px] h-[70px] relative">
              <img
                src={ImageUrl + item?.card?.info?.imageId}
                className="object-cover w-full h-full"
              />
              <button
                className="bg-[#ffff] text-gray-500 text-xs rounded-sm p-1 absolute bottom-0 right-0"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

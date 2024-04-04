import { ImageUrl } from "../utills/constant";

const ItemList = ({ items }) => {
  console.log(items);
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
              <button className="bg-[#ffff] text-gray-500 text-xs rounded-sm p-1 absolute bottom-0 right-0">
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

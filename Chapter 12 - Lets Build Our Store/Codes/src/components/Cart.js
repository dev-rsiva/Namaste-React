import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utills/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  // We can evaluate cartItems like this below code. But dont do this, it will make app inefficient, because a store will contain lot of slices, when we do this, useSelector will load all the slices of the entire store, this wil male app inefficient. So we need to select the only specific data we want in the specific slice. We should not select the whole store(read the whole store).
  //   const store = useSelector((store) => store);
  //   const cartItems = store.cart.items;

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="px-2 py-1 rounded-md bg-green-900 text-white"
          onClick={() => handleClearCart()}
        >
          Clear cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty. Add items to the cart.</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;

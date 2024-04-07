import logoImage from "./Hot-food-delivery-app.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";
import UserContext from "../utills/UserContext";
//The reading the data from the store is not a redux things, we are receciving the data and use it our App. So, useSelector hook is library/package belongs to the react-redux and not @reduxjs/toolkit
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // console.log("header");
  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  //subscribing to the store or reading the data from the store using the useSelector hook
  // useSelector hook gives access to the store, but we need the specific data from specific reducer(specific slice). We need data from cart reducer(i.e.,cartSlice). so we write store => cart => items
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <div
      id="header"
      className="flex justify-between items-center bg-emerald-100 shadow-md"
    >
      <a href="/">
        <img
          id="logo"
          src={logoImage}
          className="w-40"
          alt="Hot-food-delivery-app"
        ></img>
      </a>

      <div id="nav-items-container">
        <ul id="nav-items" className="flex justify-between px-6">
          <li className="px-3">
            {" "}
            Online Status: {onlineStatus ? "✅" : "🔴"}{" "}
          </li>
          <li id="Home" className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li id="About" className="px-3">
            <Link to="/about">About</Link>
          </li>
          <li id="Contact" className="px-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li id="Grocery" className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <Link to={"/cart"}>
            <li id="Cart" className="px-3 font-bold text-medium">
              {/* Now we are reading the data from store */}
              Cart - ({cartItems.length} items)
            </li>
          </Link>
          <li id="login" className="px-3">
            <button
              id="loginbtn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li>{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

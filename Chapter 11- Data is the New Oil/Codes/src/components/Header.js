import logoImage from "./Hot-food-delivery-app.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";
import UserContext from "../utills/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // console.log("header");
  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

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
          <li id="Cart" className="px-3">
            Cart
          </li>
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

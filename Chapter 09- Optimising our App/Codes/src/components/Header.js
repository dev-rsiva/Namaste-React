import logoImage from "./Hot-food-delivery-app.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // console.log("header");
  const onlineStatus = useOnlineStatus();

  return (
    <div id="header">
      <a href="/">
        <img id="logo" src={logoImage} alt="Hot-food-delivery-app"></img>
      </a>

      <div id="nav-items-container">
        <ul id="nav-items">
          <li> Online Status: {onlineStatus ? "✅" : "🔴"} </li>
          <li id="Home">
            <Link to="/">Home</Link>
          </li>
          <li id="About">
            <Link to="/about">About</Link>
          </li>
          <li id="Contact">
            <Link to="/contact">Contact</Link>
          </li>
          <li id="Grocery">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li id="Cart">Cart</li>
          <li id="login">
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
        </ul>
      </div>
    </div>
  );
};

export default Header;

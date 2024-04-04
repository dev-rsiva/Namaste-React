import logoImage from "./Hot-food-delivery-app.png";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // console.log("header");
  return (
    <div id="header">
      <a href="/">
        <img id="logo" src={logoImage} alt="Hot-food-delivery-app"></img>
      </a>

      <div id="nav-items-container">
        <ul id="nav-items">
          <li id="Home">Home</li>
          <li id="About">About</li>
          <li id="Contact">Contact</li>
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

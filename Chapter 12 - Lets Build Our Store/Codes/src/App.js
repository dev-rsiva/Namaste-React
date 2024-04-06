import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import About from "./components/About";
import Contact from "./components/Contact";
import { resList } from "./utills/constant";
import Error from "./components/Error";
import { useState, useEffect, useContext } from "react";
import UserContext from "./utills/UserContext";
import { Provider } from "react-redux";
import appStore from "./utills/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    //call api and get the logged in user data.

    const data = {
      name: "Sivakumar",
    };

    setUsername(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

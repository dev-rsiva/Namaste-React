import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import appstore from "../../utills/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //We can do query by using the .getByText() also, but it is more generic, best way is to use .getByRole() method
  //const loginButton = screen.getByText("Login");
  //Querying/finding - If we have multiple buttons, We can use the .getRoleBy() method using the extra parameter like name.
  const loginButton = screen.getByRole("button", { name: "Login" });
  //Assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should load Header component with a cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Simply you can use regex for this, because you just want "Cart"(generic one) and not "Cart - (0 items)" or any exact one.
  const cartItem = screen.getByText(/Cart/);
  //Assertion
  expect(cartItem).toBeInTheDocument();
});

it("Should load Header component with a cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Here you can use string
  const cartItems = screen.getByText("Cart - (0 items)");
  //Assertion
  expect(cartItems).toBeInTheDocument();
});

it("Should change Login button into Logout on a click", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //We can do query by using the .getByText() also, but it is more generic, best way is to use .getByRole() method
  //const loginButton = screen.getByText("Login");
  //Querying/finding - If we have multiple buttons, We can use the .getRoleBy() method using the extra parameter like name.
  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  //Assertion
  expect(logoutButton).toBeInTheDocument();
});

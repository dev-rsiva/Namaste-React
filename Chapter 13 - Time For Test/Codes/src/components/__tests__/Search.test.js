import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//We are trying to replicate the same scenario of fetching real api data here through Promise. For that we need "global" which is a global object given by JSDOM. JSDOM gives us access to the global object. We are creating a new property "fetch" inside the global object and assigning the function to it. THis fn is a mock function. We are making this fetch function to returns a promise which in turn returns a promise. Finally we get a data.
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res list for Pizza text input", async () => {
  await act(async () =>
    //render()
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  // Assertion
  expect(cardsBeforeSearch.length).toBe(9);

  //Querying
  const searchBtn = screen.getByRole("button", { name: "Search" });
  //Querying
  const searchInput = screen.getByTestId("searchInput");

  // The parameters of change method is (element, e(event object given by browser)). So we are giving the object as {target : "Pizza"}, means e.target.value is "Pizza". We are running test cases in JSDOM and not real browser. So, We will not get e value from real browser. so only we are simulating the mock e.value as "Pizza"
  fireEvent.change(searchInput, { target: { value: "Pizza" } });

  fireEvent.click(searchBtn);

  // screen should load 4 cards
  //Querying
  const cardsAfterSearch = screen.getAllByTestId("resCard");

  // Assertion
  expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter Top Rated Restaurant", async () => {
  await act(async () =>
    //render()
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  // Assertion
  expect(cardsBeforeFilter.length).toBe(9);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top-rated-restaurants",
  });

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(3);
});

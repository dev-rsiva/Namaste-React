import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";

import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with Props Data", () => {
  //render()
  render(<RestaurantCard resData={MOCK_DATA} />);
  //Querying
  const name = screen.getByText("Pizza Hut");
  //Assertion
  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //render()
  render(<RestaurantCardPromoted resData={MOCK_DATA} />);
  //Querying
  const name = screen.getByText("Promoted");
  //Assertion
  expect(name).toBeInTheDocument();
});

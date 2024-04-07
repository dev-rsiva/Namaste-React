import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("contact Us test cases", () => {
  //helper functions
  beforeAll(() => {
    console.log("Before all");
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  afterAll(() => {
    console.log("After all");
  });

  afterEach(() => {
    console.log("After Each");
  });

  test("Should load Contact us component", () => {
    //To test the react compoenent we need to render it first. We cannot render it in the browser, we cannot render it in the server. How can we render? We need to use render() method from JSDOM(browser-like).
    render(<Contact />);

    //We are finding the the headings in the selected testing component(<Contact />). The screen.getByRole("heading") finds all the headings in the <Contact /> component.
    const heading = screen.getByRole("heading");

    // ".toBeInTheDocument" method checks whether the rendered Component(<Contact />) is having the heading or not.

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load submit button inside Contact us component", () => {
    render(<Contact />);

    const submitBtn = screen.getByText("Submit");

    expect(submitBtn).toBeInTheDocument();
  });

  test("Should load input element inside Contact us component", () => {
    render(<Contact />);

    const inputEl = screen.getByPlaceholderText("name");

    expect(inputEl).toBeInTheDocument();
  });

  test("Should load two input boxes inside Contact us component", () => {
    //render()
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});

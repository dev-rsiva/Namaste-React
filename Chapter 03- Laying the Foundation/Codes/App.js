import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Heading = () => (
  <h1 className="heading">
    This is a JSX where you can write html-like syntax
  </h1>
);

const documentNumber = "#10938";

const Title = () => {
  return (
    <>
      <div>Hi this is a title of the document number {documentNumber}</div>
    </>
  );
};

const HeadingComponent = () => {
  return (
    <>
      <Heading />
      <Title />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";

// test("should render About component", () => {
//     render(<About />);
//   var AboutComponent = screen.getByTestId("About-component");
//   expect(AboutComponent).toBeInTheDocument();
// });
import React from "react";
import ReactDOM from "react";
import About from "../pages/About";

it("render About component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<About />, div);
});

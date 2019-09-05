import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import Dashboard from "./components/Dashboard";

test("Dashboard renders without crashing", () => {
  render(<Dashboard />);
});

test("Strike buttons is rendering", () => {
  const container = render(<App />);
  container.getByText(/strikes/i);
});

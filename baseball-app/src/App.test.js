import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import Dashboard from "./components/Dashboard";

test("Dashboard renders without crashing", () => {
  render(<Dashboard />);
});

test("Strike button is rendering", () => {
  const container = render(<App />);
  container.getAllByText(/strike/i);
});

test("Ball button is rendering", () => {
  const container = render(<App />);
  container.getAllByText(/ball/i);
});

test("Foul button is rendering", () => {
  const container = render(<App />);
  container.getAllByText(/foul/i);
});

import React from "react";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

// Initial State
test("App renders with intial state of Balls set to 0", () => {
  const container = render(<App />);

  container.getByText(/Balls: 0/);
});

test("App renders with intial state of Strikes set to 0", () => {
  const container = render(<App />);

  container.getByText(/Strikes: 0/);
});

test("App renders with intial state of Fouls set to 0", () => {
  const container = render(<App />);

  container.getByText(/Fouls: 0/);
});

// Components

test("Dashboard renders without crashing", () => {
  render(<Dashboard />);
});

test("Display renders without crashing", () => {
  render(<Display />);
});

// Buttons
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

// onClick Events
test("Strike button works and resets to 0 if >= 3", () => {
  const container = render(<App />);
  const strikes = container.getByTestId("strike-value");
  const strikeButton = container.getByTestId("strike-button");

  expect(strikes.textContent).toBe("Strikes: 0");
  fireEvent.click(strikeButton);

  expect(strikes.textContent).toBe("Strikes: 1");
  fireEvent.click(strikeButton);

  expect(strikes.textContent).toBe("Strikes: 2");
  fireEvent.click(strikeButton);

  expect(strikes.textContent).toBe("Strikes: 3");
  fireEvent.click(strikeButton);

  expect(strikes.textContent).toBe("Strikes: 0");
});

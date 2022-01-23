import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

beforeEach(() => {
  render(<App />);
});

test("should render title", () => {
  const titleEl = screen.getByText(/redux practica/i);
  expect(titleEl).toBeInTheDocument();
});

test("should render all counter elements", () => {
  const countEl = screen.getByText(/contador/i);
  const buttonEl = screen.getByRole("button", { name: "+5" });

  expect(countEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
});

test("simulate a user pushing twice the +5 button", () => {
  const buttonEl = screen.getByRole("button", { name: "+5" });
  userEvent.click(buttonEl);
  userEvent.click(buttonEl);
  const resultEl = screen.getByText(/10/i);
  expect(resultEl).toBeInTheDocument;
});

test("should put a number from form", () => {
  const input = screen.getByLabelText(/number/i);
  const buttonEl = screen.getByRole("button", { name: /change/i });
  userEvent.type(input, "400");
  userEvent.click(buttonEl);
  const resultEl = screen.getByText(/400/i);
  expect(resultEl).toBeInTheDocument;
});

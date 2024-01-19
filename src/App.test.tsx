import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app", () => {
  render(<App />);
  const linkElement = screen.getByText(/بیت پین/);
  expect(linkElement).toBeInTheDocument();
});

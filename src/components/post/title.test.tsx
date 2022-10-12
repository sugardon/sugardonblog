import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "./title";

describe("<Title />", () => {
  beforeEach(() => {
    render(<Title> test </Title>);
  });

  test("ok", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("test");
  });
});

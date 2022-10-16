import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { Options } from "../../types/post-page";
import { OptionView } from "./option-view";

describe("<OptionView />", () => {
  const options: Options = {
    showDraft: true,
    tag: "test-tag",
    pageSize: 0,
    pageNumber: 0,
  };

  afterEach(() => {
    cleanup();
  });
  // Draft
  test("Success Include draft", () => {
    render(<OptionView options={options} />);
    expect(screen.getByText("Include draft posts!")).toBeTruthy();
  });
  test("Success not include draft", () => {
    const o = { ...options, showDraft: false };
    render(<OptionView options={o} />);
    expect(screen.queryByText("Include draft posts!")).toBeFalsy();
  });
  // Tag
  test("Success tag", () => {
    render(<OptionView options={options} />);
    expect(screen.getByText("test-tag")).toBeTruthy();
  });
  test("Success no tag", () => {
    const o = { ...options, tag: undefined };
    render(<OptionView options={o} />);
    expect(screen.queryByText("test-tag")).toBeFalsy();
  });
});

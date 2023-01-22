import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import Loader from "./Loader";
const mockedProps = {
  text: "sample loader text",
  isLoading: false,
};

describe("Loader", () => {
  it("Should be visible with the given text", () => {
    render(<Loader text={mockedProps.text} />);

    const progressBar = screen.getByRole("progressbar");
    const heading = screen.getByRole("heading");

    expect(progressBar).toBeTruthy();
    expect(heading).toBeTruthy();
    expect(screen.getByText(mockedProps.text)).toBeInTheDocument();
  });

  it("Should not display heading in case text props not provided", () => {
    render(<Loader />);

    const progressBar = screen.getByRole("progressbar");
    const heading = screen.queryByRole("heading");

    expect(progressBar).toBeTruthy();
    expect(heading).toBeNull();
  });

  it("Should display children content", () => {
    render(
      <Loader isLoading={mockedProps.isLoading}>
        <p>child element</p>
      </Loader>
    );

    const progressBar = screen.queryByRole("progressbar");
    const heading = screen.queryByRole("heading");

    expect(progressBar).toBeNull();
    expect(heading).toBeNull();
    expect(screen.getByText(/child element/)).toBeVisible();
  });
});

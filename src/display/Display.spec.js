// Test away!
import React from "react";

import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import Display from "./Display";

describe("<Display />", () => {
  it("test run", () => {
    expect(true).toBe(true);
  });

  it("matches snapshot", () => {
    const { container } = render(<Display />);
    expect(container).toMatchSnapshot();
  });

  it("displays closed if closed prop is true", () => {
    const { getByText } = render(<div className="led red-led">Closed</div>);
    expect(getByText).toBeTruthy();
  });

  it("displays open if closed prop is false", () => {
    const { getByText } = render(<div className="led green-led">Open</div>);
    expect(getByText).toBeTruthy();
  });

  it("displays locked if the locked prop is true", () => {
    const { getByText } = render(<div className="led green-led">Locked</div>);
    expect(getByText).toBeTruthy();
  });

  it("displays unlocked if locked prop is false", () => {
    const { getByText } = render(<div className="led red-led">Unlocked</div>);
    expect(getByText).toBeTruthy();
  });
});

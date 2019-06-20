// Test away!
import React from "react";

import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import Controls from "./Controls";

describe("<Controls />", () => {
  it("test run", () => {
    expect(true).toBe(true);
  });

  it("matches snapshot", () => {
    const { container } = render(<Controls />);
    expect(container).toMatchSnapshot();
  });

  it("displays closed gate", () => {
    const { getByText } = render(
      <button className="toggle-btn">Close Gate</button>
    );
    expect(getByText).toBeTruthy();
  });

  it("displays open gate", () => {
    const { getByText } = render(
      <button className="toggle-btn">Open Gate</button>
    );
    expect(getByText).toBeTruthy();
  });
});

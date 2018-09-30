import React from "react";
import renderer from "react-test-renderer";
import Header from "../src/components/Header";

describe("Header", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

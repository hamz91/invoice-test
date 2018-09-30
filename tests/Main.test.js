import React from "react";
import renderer from "react-test-renderer";
import Main from "../src/components/Main";

describe("Main", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

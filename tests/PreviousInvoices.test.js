import React from "react";
import renderer from "react-test-renderer";
import PreviousInvoices from "../src/components/PreviousInvoices";

describe("PreviousInvoices", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<PreviousInvoices />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

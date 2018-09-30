import React from "react";
import renderer from "react-test-renderer";
import InvoiceForm from "../src/components/InvoiceForm";

describe("InvoiceForm", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<InvoiceForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import { Switch, Route } from "react-router-dom";
import InvoiceForm from "./InvoiceForm.js";
import PreviousInvoices from "./PreviousInvoices.js";

class Main extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <InvoiceForm />} />
        <Route path="/invoice-form" render={() => <InvoiceForm />} />
        <Route path="/previous-invoices" render={() => <PreviousInvoices />} />
      </Switch>
    );
  }
}

export default Main;

import React from "react";

class InvoiceForm extends React.Component {
  constructor() {
    super();

    this.state = {
      invoiceValue: "",
      dateDue: "",
      customerName: "",
      description: ""
    };

    this.valueChange = this.valueChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);

    this.formSubmit = this.formSubmit.bind(this);
  }

  valueChange(event) {
    this.setState({
      invoiceValue: event.target.value
    });
  }
  dateChange(event) {
    this.setState({
      dateDue: event.target.value
    });
  }
  nameChange(event) {
    this.setState({
      customerName: event.target.value
    });
  }
  descriptionChange(event) {
    this.setState({
      description: event.target.value
    });
  }
  formSubmit(event) {
    event.preventDefault();

    // form validation to acquire both the first and last name
    // object sent to server to be stored as a new invoice
    if (this.state.customerName.trim().indexOf(" ") != -1) {
      const invoice = {
        name: this.state.customerName,
        date: this.state.dateDue,
        value: this.state.invoiceValue,
        description: this.state.description,
        paid: "Still awaiting payment"
      };

      fetch("/api/invoices", {
        method: "post",
        body: JSON.stringify(invoice),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          alert("Your invoice has been successfully submitted");
        });

      this.setState({
        invoiceValue: "",
        dateDue: "",
        customerName: "",
        description: ""
      });
    } else {
      alert("Please enter both a first and last name");
    }
  }
  render() {
    return (
      <div className="form-wrapper">
        <h4 className="form-title">Please Enter Your Invoice Details Below</h4>
        <form className="form" onSubmit={this.formSubmit}>
          <p>Your Name</p>
          <input
            className="form-input"
            type="text"
            value={this.state.customerName}
            onChange={this.nameChange}
            placeholder="John Smith"
            required
          />
          <p>Date Invoice is Due</p>
          <input
            className="form-input"
            type="date"
            value={this.state.dateDue}
            onChange={this.dateChange}
            required
          />
          <p>Amount Payable (£)</p>
          <input
            className="form-input"
            type="number"
            value={this.state.invoiceValue}
            onChange={this.valueChange}
            placeholder="100"
            required
          />
          <p>Invoice Description</p>
          <input
            className="form-input"
            type="text"
            value={this.state.description}
            onChange={this.descriptionChange}
            placeholder="Annual Accounts"
            required
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default InvoiceForm;

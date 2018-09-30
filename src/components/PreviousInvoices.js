import React from "react";

class PreviousInvoices extends React.Component {
  constructor() {
    super();

    this.state = {
      previousInvoices: {}
    };

    this.editInvoice = this.editInvoice.bind(this);
  }

  componentDidMount() {
    fetch(`/api/invoices`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          previousInvoices: data
        });
      });
  }

  editInvoice(invoice, status) {
    // check to see if invoice has been payed or not
    // make put request if no payment found to update application
    if (status == "Still awaiting payment") {
      fetch(`/api/invoices/${invoice}`, {
        method: "put"
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data.paid);
          alert("Your invoice has been successfully updated");
        })
        .then(
          fetch(`/api/invoices`)
            .then(response => {
              return response.json();
            })
            .then(data => {
              this.setState({
                previousInvoices: data
              });
            })
        );
    } else alert("Invoice already payed");
  }
  render() {
    return (
      <div className="invoices-wrapper">
        {Object.keys(this.state.previousInvoices).map(invoice => {
          return (
            <div key={invoice}>
              <ul className="invoices">
                <li>
                  <h5>Invoice ID</h5>
                  <p>{invoice}</p>
                </li>
                <li>
                  <h5>Invoicee:</h5>
                  <p>{this.state.previousInvoices[invoice].name}</p>
                </li>
                <li>
                  <h5>Date Due:</h5>
                  <p>{this.state.previousInvoices[invoice].date}</p>
                </li>
                <li>
                  <h5>Amount Payable:</h5>
                  <p>{this.state.previousInvoices[invoice].value}</p>
                </li>
                <li>
                  <h5>Description:</h5>
                  <p>{this.state.previousInvoices[invoice].description}</p>
                </li>
                <li>
                  <h5>Status:</h5>
                  <p>{this.state.previousInvoices[invoice].paid}</p>
                  <h5>Click to confirm payment</h5>

                  <button
                    onClick={() =>
                      this.editInvoice(
                        invoice,
                        this.state.previousInvoices[invoice].paid
                      )
                    }
                  >
                    Confirm
                  </button>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PreviousInvoices;

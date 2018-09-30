const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use("/static", express.static("static"));
app.set("view engine", "hbs");

// ideally invoices would be in a database, for this test all invoices are sent to this object
// id created in order to keep track and edit invoices
let invoices = {};
let id = 1;

// form application post request
app.post("/api/invoices", (req, res) => {
  let invoiceID = id;
  id++;
  const tempInvoice = { [invoiceID]: req.body };
  invoices = Object.assign({}, invoices, tempInvoice);
  console.log(invoices);
  res.json(invoices);
});

// update payment status request with date stamp
app.put("/api/invoices/:id", (req, res) => {
  const date = new Date();
  // check to ensure payment will not be made twice
  if (invoices[req.params.id].paid == "Still awaiting payment") {
    invoices[
      req.params.id
    ].paid = `Invoice Successfully Payed on ${date.toUTCString()}`;
  }

  res.json(invoices);
});

app.get("/api/invoices", function(req, res) {
  res.json(invoices);
});

// react router refresh bug fix
app.get("*", function(req, res) {
  res.render("index");
});

const port = process.env.PORT || 8081;
app.listen(port, function() {
  console.log(`Listening on port number ${port}`);
});

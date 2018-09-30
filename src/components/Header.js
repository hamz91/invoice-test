import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h2 className="header__title">Nimbla Invoice Checker</h2>
      <nav>
        <ul className="router-links">
          <li>
            <NavLink activeStyle={{ color: "red" }} to="/invoice-form">
              New Invoice
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to="/previous-invoices">
              Invoices
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

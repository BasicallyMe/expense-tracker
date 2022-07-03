import React from "react";
import { NavLink } from "react-router-dom";
import Icon from './../icons';
import "./Navigation.scss";

const Navigation = (props) => {
  const today = new Date().toDateString();
  return (
    <div className="navigation">
      <header className="navigation-header">
        <Icon name="Logo" className="logo" /> 
        <h4 className="name">Expensify<span className="tagline">Personal & Finance</span></h4>
      </header>
      <ul className="nav-items">
        <li className="nav-items">
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="transactions">Transactions</NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="analytics">Analytics</NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="settings">Settings</NavLink>
        </li>
        <li className="nav-items">
          <button>Logout</button>
        </li>
      </ul>
      <p className="date">{today}</p>
    </div>
  );
};

export default Navigation;

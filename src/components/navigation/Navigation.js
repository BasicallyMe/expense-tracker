import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  TbSmartHome,
  TbSettings,
  TbLogout,
  TbArrowsLeftRight,
} from "react-icons/tb";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import Icon from "./../icons";
import gsap from "gsap";
import "./Navigation.scss";

const Navigation = (props) => {
  const navListRef = useRef();

  function animateNavigation(listItems, headerItems, footerItems) {
    gsap.fromTo(
      listItems,
      { x: -50, opacity: 0 },
      { duration: 0.7, x: 0, opacity: 1, stagger: 0.1 }
    );
    gsap.set(headerItems[1], { zIndex: -1 });
    gsap.fromTo(
      headerItems,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.1 }
    );
    gsap.fromTo(
      footerItems,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    );
  }

  useEffect(() => {
    const headerItems = navListRef.current.children[0].children;
    const listItems = navListRef.current.children[1].children;
    const footerItems = navListRef.current.children[2];
    animateNavigation(listItems, headerItems, footerItems);
  }, []);

  const today = new Date().toDateString();
  return (
    <div className="navigation" ref={navListRef}>
      <header className="navigation-header">
        <Icon name="Logo" className="logo" />
        <h4 className="name">
          Expensify<span className="tagline">Personal & Finance</span>
        </h4>
      </header>
      <ul className="nav-items">
        <li className="nav-items">
          <NavLink to="/">
            <TbSmartHome />
            Dashboard
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="transactions">
            <TbArrowsLeftRight />
            Transactions
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="analytics">
            <HiOutlineChartSquareBar />
            Analytics
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="settings">
            <TbSettings />
            Settings
          </NavLink>
        </li>
        <li className="nav-items">
          <button>
            <TbLogout />
            Logout
          </button>
        </li>
      </ul>
      <p className="date">{today}</p>
    </div>
  );
};

export default Navigation;

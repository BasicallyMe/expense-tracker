import React, { useRef } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { Card, Item, useStore } from "./../";
import "./Dashboard.scss";
import { useState } from "react";

const Dashboard = () => {
  const flickingRef = useRef(null);
  const { userData, cards, expenses } = useStore();
  const [tabIndex, setTabIndex] = useState(0);

  function handleClick(index) {
    console.info(index, "function call");
    setTabIndex(index);
  }

  return (
    <div className="dashboard">
      <h2 className="greet-text">
        Hello <span className="name">{userData.firstName}</span>
      </h2>
      <section id="section-1">
        <div className="cards">
          <header className="div-heading">
            <h3>Your cards</h3>
          </header>
          <Flicking
            ref={flickingRef}
            defaultIndex={0}
            horizontal={false}
            bound={false}
            moveType="snap"
            align="prev"
            circular={false}
            onMoveEnd={(e) => {
              console.log(e);
            }}
          >
            {cards.map((card, index) => (
              <Card
                key={card.cardNumber}
                data={card}
                firstName={userData.firstName}
                lastName={userData.lastName}
              />
            ))}
          </Flicking>
        </div>
        <div className="recent-expenses">
          <header className="div-heading">
            <h3>Recent Expenses</h3>

            <div className="tabs">
              <button
                className={`tab ${tabIndex === 0 ? "active" : null}`}
                onClick={() => handleClick(0)}
              >
                Today
              </button>
              <button
                className={`tab ${tabIndex === 1 ? "active" : null}`}
                onClick={() => handleClick(1)}
              >
                Weekly
              </button>
              <button
                className={`tab ${tabIndex === 2 ? "active" : null}`}
                onClick={() => handleClick(2)}
              >
                Monthly
              </button>
            </div>
          </header>
          <div className="expenses-list">
            {expenses.length === 0 ? (
              <h1>No expenses</h1>
            ) : (
              <ul>
                {expenses.map((item, index) => (
                  <Item data={item} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

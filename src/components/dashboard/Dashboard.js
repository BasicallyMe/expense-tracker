import React, { useRef } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { Card, useStore } from "./../";
import "./Dashboard.scss";

const Dashboard = () => {
  const flickingRef = useRef(null);
  const { userData } = useStore();
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
            {userData.cards.map((card, index) => (
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
              <button>Today</button>
              <button>Weekly</button>
              <button>Monthly</button>
            </div>
          </header>
          <div className="expenses-list">
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

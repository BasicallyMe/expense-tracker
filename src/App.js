import React from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics, Dashboard, Navigation, Settings, Transactions } from './components';
import "./App.scss";

function App() {
  return (
      <div className="launch-page">
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
  );
}

export default App;

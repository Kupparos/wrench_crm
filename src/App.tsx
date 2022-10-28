import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import News from "./components/content/News";
import Addresses from "./components/content/Addresses";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="navigation">
          <Menu />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/address" element={<Addresses />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

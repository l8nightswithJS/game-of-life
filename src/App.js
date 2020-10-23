import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./game/game-of-life.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Game />
      </header>
    </div>
  );
}

export default App;

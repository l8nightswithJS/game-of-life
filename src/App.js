import React from "react";
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

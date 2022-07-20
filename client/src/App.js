import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InitializeLink from "./components/Initialize-Link";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InitializeLink></InitializeLink>
      </header>
    </div>
  );
}

export default App;
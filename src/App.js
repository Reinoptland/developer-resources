import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ResourcesList from "./components/ResourcesList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResourcesList />
      </header>
    </div>
  );
}

export default App;

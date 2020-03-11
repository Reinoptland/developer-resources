import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ResourcesList from "./components/ResourcesList";
import DeveloperList from "./components/DeveloperList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DeveloperList />
        <ResourcesList />
      </header>
    </div>
  );
}

export default App;

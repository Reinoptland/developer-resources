import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ResourcesListByTag from "./components/ResourcesListByTag";
import DeveloperList from "./components/DeveloperList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DeveloperList />
        <ResourcesListByTag />
      </header>
    </div>
  );
}

export default App;

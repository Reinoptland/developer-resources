import React from "react";
import "./App.css";
import ResourcesListByTag from "./components/ResourcesListByTag";
import DeveloperList from "./components/DeveloperList";
import ResourceList from "./components/ResourceList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResourceList />
        <DeveloperList />
        <ResourcesListByTag />
      </header>
    </div>
  );
}

export default App;

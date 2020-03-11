import React from "react";
import "./App.css";
import ResourcesListByTag from "./components/ResourcesListByTag";
import DeveloperList from "./components/DeveloperList";
import ResourceList from "./components/ResourceList";
import DeveloperDetails from "./components/DeveloperDetails";
import ResourceDetails from "./components/ResourceDetails";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResourceDetails />
        {/* <DeveloperDetails />
        <ResourceList />
        <DeveloperList />
        <ResourcesListByTag /> */}
      </header>
    </div>
  );
}

export default App;

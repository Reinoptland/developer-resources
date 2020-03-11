import React from "react";
import "./App.css";
import ResourcesListByTag from "./components/ResourcesListByTag";
import DeveloperList from "./components/DeveloperList";
import ResourceList from "./components/ResourceList";
import DeveloperDetails from "./components/DeveloperDetails";
import ResourceDetails from "./components/ResourceDetails";
import DeveloperForm from "./components/DeveloperForm";
import ResourceForm from "./components/ResourceForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResourceList />
        <ResourceForm />
        <ResourceDetails />
        <hr></hr>
        <DeveloperList />
        <DeveloperDetails />
        <DeveloperForm />
        {/* 
        <ResourcesListByTag /> */}
      </header>
    </div>
  );
}

export default App;

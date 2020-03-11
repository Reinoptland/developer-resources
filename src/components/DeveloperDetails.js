import React from "react";
import {
  selectDeveloperById,
  selectAllDevelopers
} from "../store/developers/selectors";
import { useSelector } from "react-redux";

export default function DeveloperDetails() {
  const developer = useSelector(selectDeveloperById(1));
  const allDevelopers = useSelector(selectAllDevelopers);
  console.log("DEVELOPER IN COMPONENT", developer);
  console.log("DEVELOPERS IN COMPONENT", allDevelopers);

  function handleChange(event) {
    console.log(typeof parseInt(event.target.value));
  }
  return (
    <div>
      <h4>
        Name: {developer.name}{" "}
        {developer.website ? <a href={developer.website}>Website</a> : null}
      </h4>
      <select onChange={handleChange}>
        <option defaultValue>Select one</option>
        {allDevelopers.map(developer => {
          return (
            <option value={developer.id} key={developer.id}>
              {developer.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

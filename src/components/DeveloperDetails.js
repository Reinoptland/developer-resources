import React, { useState } from "react";
import {
  selectDeveloperById,
  selectAllDevelopers
} from "../store/developers/selectors";
import { useSelector } from "react-redux";

export default function DeveloperDetails() {
  const [chosenId, setChosenId] = useState();
  const developer = useSelector(selectDeveloperById(chosenId));
  const allDevelopers = useSelector(selectAllDevelopers);
  console.log("DEVELOPER IN COMPONENT", developer);
  console.log("DEVELOPERS IN COMPONENT", allDevelopers);
  console.log("ID USER WANTS TO SEE?", chosenId);
  function handleChange(event) {
    // console.log(typeof parseInt(event.target.value));
    setChosenId(parseInt(event.target.value));
  }

  const details = chosenId ? (
    <h4>
      Name: {developer.name}{" "}
      {developer.website ? <a href={developer.website}>Website</a> : null}
    </h4>
  ) : null;

  return (
    <div>
      {details}
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

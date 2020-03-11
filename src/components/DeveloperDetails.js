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
  return (
    <div>
      <h4>
        Name: {developer.name}{" "}
        {developer.website ? <a href={developer.website}>Website</a> : null}
      </h4>
      <select>
        <option defaultValue>Select one</option>
        <option>Irene</option>
      </select>
    </div>
  );
}

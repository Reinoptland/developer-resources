import React from "react";
import { selectAllDevelopers } from "../store/developers/selectors";
import { useSelector } from "react-redux";

export default function DeveloperList() {
  const developers = useSelector(selectAllDevelopers);
  //   console.log("DEVELOPERS IN COMPONENT", developers);
  return (
    <div>
      <ul>
        {developers.map(developer => {
          //   console.log(developer);
          return (
            <li key={developer.id}>
              Name: {developer.name}, <a href={developer.website}>Website </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

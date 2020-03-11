import React from "react";
import { selectAllDevelopers } from "../store/developers/selectors";
import { useSelector } from "react-redux";

export default function DeveloperList() {
  const developers = useSelector(selectAllDevelopers);
  //   console.log("DEVELOPERS IN COMPONENT", developers);

  function handleDelete(userId) {
    console.log("DELETE USER", userId);
  }
  return (
    <div>
      <ul>
        {developers.map(developer => {
          //   console.log(developer);
          return (
            <li key={developer.id}>
              Name: {developer.name}, <a href={developer.website}>Website </a>{" "}
              <button onClick={() => handleDelete(developer.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

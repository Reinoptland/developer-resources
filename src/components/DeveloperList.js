import React from "react";
import { selectAllDevelopers } from "../store/developers/selectors";
import { useSelector } from "react-redux";
import { deleteDeveloper } from "../store/developers/actions";
import { useDispatch } from "react-redux";

export default function DeveloperList() {
  const developers = useSelector(selectAllDevelopers);
  //   console.log("DEVELOPERS IN COMPONENT", developers);
  const dispatch = useDispatch();

  function handleDelete(developerId) {
    // console.log("DELETE USER", developerId);
    const sure = window.confirm("Are you sure?");

    if (!sure) {
      return;
    }

    const action = deleteDeveloper(developerId);
    // console.log(action);
    dispatch(action);
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

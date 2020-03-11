import React, { useEffect } from "react";
import { selectAllDevelopers } from "../store/developers/selectors";
import { useSelector } from "react-redux";
import {
  deleteDeveloper,
  developersFetchedSuccess
} from "../store/developers/actions";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function DeveloperList() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchDevelopers() {
      const response = await axios.get(
        "http://my-json-server.typicode.com/Reinoptland/developer-resources/developers"
      );
      // console.log(response.data);
      const action = developersFetchedSuccess(response.data);
      // console.log(action);
      dispatch(action);
    }

    fetchDevelopers();
  }, [dispatch]);

  const developers = useSelector(selectAllDevelopers);
  //   console.log("DEVELOPERS IN COMPONENT", developers);

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
      <h1>Developers</h1>
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

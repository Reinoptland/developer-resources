import React, { useState } from "react";
import {
  selectResourceById,
  selectAllResources
} from "../store/resources/selectors";
import { useSelector } from "react-redux";

export default function ResourceDetails() {
  const [chosenId, setChosenId] = useState();
  const resource = useSelector(selectResourceById(chosenId));
  const allResources = useSelector(selectAllResources);

  //   console.log("RESOURCE IN COMPONENT", resource);
  //   console.log("ALL", allResources);
  const details = resource ? (
    <div>
      RESOURCE DETAILS
      <div>
        <h4>
          Name: {resource.name} {resource.type}
        </h4>
        <span>Tags: {resource.tags.join(", ")}</span>
        <h5>
          <a href={resource.url}>Visit site</a>
        </h5>
      </div>
    </div>
  ) : null;

  function handleChange(event) {
    // console.log(event.target.value);
    setChosenId(parseInt(event.target.value));
  }

  return (
    <div>
      {details}
      <select onChange={handleChange}>
        <option defaultValue>Choose one</option>
        {allResources.map(resource => {
          //   console.log(resource);
          return (
            <option value={resource.id} key={resource.id}>
              {resource.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

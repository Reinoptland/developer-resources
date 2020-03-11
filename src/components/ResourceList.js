import React from "react";
import { selectAllResources } from "../store/resources/selectors";
import { useSelector } from "react-redux";

export default function ResourceList() {
  const resources = useSelector(selectAllResources);
  console.log("RESOURCES IN COMPONENT", resources);
  return (
    <div>
      RESOURCES
      <ul>
        {resources.map(resource => {
          console.log(resource);
          return (
            <li key={resource.id}>
              The {resource.name} {resource.type}{" "}
              <a href={resource.url}>Website</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

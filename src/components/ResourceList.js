import React from "react";
import { selectAllResources } from "../store/resources/selectors";
import { useSelector } from "react-redux";
import Resource from "./Resource";

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
            <Resource
              key={resource.id}
              name={resource.name}
              type={resource.type}
              url={resource.url}
            />
          );
        })}
      </ul>
    </div>
  );
}

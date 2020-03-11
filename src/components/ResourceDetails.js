import React from "react";
import { selectResourceById } from "../store/resources/selectors";
import { useSelector } from "react-redux";

export default function ResourceDetails() {
  const resource = useSelector(selectResourceById(5));

  console.log("RESOURCE IN COMPONENT", resource);
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
  return <div>{details}</div>;
}

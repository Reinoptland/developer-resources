import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectResourcesWithTag,
  resourcesTags
} from "../store/resources/selectors";

import { selectDeveloperStatistics } from "../store/developers/selectors";
import Resource from "./Resource";

export default function ResourcesList() {
  const [tagUserWantsToSee, setTagUserWantsToSee] = useState();
  const resourcesWithTag = useSelector(
    // using the parameterized selector: selectResourcesWithTag
    selectResourcesWithTag(tagUserWantsToSee)
  );
  const tags = useSelector(resourcesTags);
  //   console.log(tags);
  //   console.log("WHAT TAG", tagUserWantsToSee);
  //   console.log("WHAT RESOURCES:", resourcesWithTag);
  // console.log(selectDeveloperStatistics);
  return (
    <div>
      <h2>View libraries with a specific tag:</h2>
      <select onChange={event => setTagUserWantsToSee(event.target.value)}>
        <option defaultValue> Select a tag </option>
        {tags.map(tag => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      {resourcesWithTag.map(resource => {
        return (
          <Resource
            key={resource.id}
            name={resource.name}
            type={resource.type}
            url={resource.url}
          />
        );
      })}
    </div>
  );
}

import React, { useEffect } from "react";
import { selectAllResources } from "../store/resources/selectors";
import { useSelector } from "react-redux";
import Resource from "./Resource";
import axios from "axios";

export default function ResourceList() {
  const resources = useSelector(selectAllResources);
  //   console.log("RESOURCES IN COMPONENT", resources);
  useEffect(() => {
    async function fetchResources() {
      const response = await axios.get(
        "http://my-json-server.typicode.com/Reinoptland/developer-resources/resources"
      );
      console.log(response);
    }

    fetchResources();
  }, []);
  return (
    <div>
      RESOURCES
      <ul>
        {resources.map(resource => {
          //   console.log(resource);
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

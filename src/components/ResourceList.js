import React, { useEffect } from "react";
import { selectAllResources } from "../store/resources/selectors";
import { useSelector, useDispatch } from "react-redux";
import Resource from "./Resource";
import axios from "axios";
import { fetchResourcesSuccess } from "../store/resources/actions";

export default function ResourceList() {
  const resources = useSelector(selectAllResources);
  const dispatch = useDispatch();
  //   console.log("RESOURCES IN COMPONENT", resources);
  useEffect(() => {
    async function fetchResources() {
      const response = await axios.get(
        "http://my-json-server.typicode.com/Reinoptland/developer-resources/resources"
      );
      // console.log(response);

      const action = fetchResourcesSuccess(response.data);
      // console.log(action);
      dispatch(action);
    }

    fetchResources();
  }, [dispatch]);
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
              id={resource.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

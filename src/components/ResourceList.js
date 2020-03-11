import React from "react";
import { selectAllResources } from "../store/resources/selectors";
import { useSelector } from "react-redux";

export default function ResourceList() {
  const resources = useSelector(selectAllResources);
  console.log("RESOURCES IN COMPONENT", resources);
  return <div>RESOURCES</div>;
}

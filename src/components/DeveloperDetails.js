import React from "react";
import { selectDeveloperById } from "../store/developers/selectors";
import { useSelector } from "react-redux";

export default function DeveloperDetails() {
  const developer = useSelector(selectDeveloperById(3));
  console.log("DEVELOPER IN COMPONENT", developer);
  return <div>DETAILS</div>;
}

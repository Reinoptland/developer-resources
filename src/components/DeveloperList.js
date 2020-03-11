import React from "react";
import { selectAllDevelopers } from "../store/developers/selectors";
import { useSelector } from "react-redux";

export default function DeveloperList() {
  const developers = useSelector(selectAllDevelopers);
  console.log("DEVELOPERS IN COMPONENT", developers);
  return <div>LIST</div>;
}

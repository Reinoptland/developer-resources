import React from "react";
import { deleteResource } from "../store/resources/actions";
import { useDispatch } from "react-redux";

export default function Resource(props) {
  const dispatch = useDispatch();

  function handleDeleteClick(resourceId) {
    console.log("DELETE: ", resourceId);
    const action = deleteResource(resourceId);
    console.log(action);
    dispatch(action);
  }

  return (
    <div>
      <p>
        The {` ${props.name} ${props.type}`}
        <a href={props.url}> LINK </a>
        <button onClick={() => handleDeleteClick(props.id)}>X</button>
      </p>
    </div>
  );
}

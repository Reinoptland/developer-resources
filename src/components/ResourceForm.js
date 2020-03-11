import React, { useState } from "react";
import { addResource } from "../store/resources/actions";
import { useDispatch } from "react-redux";

export default function ResourceForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    const action = addResource(name, type, url);
    console.log(action);
    dispatch(action); // we should get an action
  }

  return (
    <div>
      <h1>Add a resource</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input value={name} onChange={event => setName(event.target.value)} />
        <label>type</label>
        <input value={type} onChange={event => setType(event.target.value)} />
        <label>url</label>
        <input value={url} onChange={event => setUrl(event.target.value)} />
        <input type="submit" />
      </form>
    </div>
  );
}

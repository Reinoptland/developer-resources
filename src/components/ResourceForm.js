import React, { useState } from "react";

export default function ResourceForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [url, setUrl] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(name, type, url);
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

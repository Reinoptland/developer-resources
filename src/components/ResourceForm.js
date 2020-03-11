import React, { useState } from "react";

export default function ResourceForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [url, setUrl] = useState("");

  return (
    <div>
      <h1>Add a resource</h1>
      <form>
        <label>Name</label>
        <input value={name} onChange={event => setName(event.target.value)} />
        <label>type</label>
        <input value={type} onChange={event => setType(event.target.value)} />
        <label>url</label>
        <input value={url} onChange={event => setUrl(event.target.value)} />
      </form>
    </div>
  );
}

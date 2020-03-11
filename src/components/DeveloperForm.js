import React, { useState } from "react";

export default function DeveloperForm() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log("DO WE HAVE DATA", name, url);
  }
  return (
    <div onSubmit={handleSubmit}>
      <h1>ADD DEV</h1>
      <form>
        <label>Name</label>
        <input value={name} onChange={event => setName(event.target.value)} />
        <label>Website Url</label>
        <input value={url} onChange={event => setUrl(event.target.value)} />
        <input type="submit" />
      </form>
    </div>
  );
}

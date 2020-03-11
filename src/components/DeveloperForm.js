import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function DeveloperForm() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    // console.log("DO WE HAVE DATA", name, url);
    function addDeveloper(name, url) {
      return {
        type: "ADD_DEVELOPER",
        payload: {
          id: Math.round(Math.random() * 1000000),
          name: name,
          url: url,
          favorites: []
        }
      };
    }
    const action = addDeveloper(name, url);

    dispatch(action);
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
